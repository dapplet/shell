import bs58 from 'bs58';
import { decode } from 'cbor-x';
import CID from 'cids';
import { ethers } from 'ethers';
import IPFS from 'ipfs-http-client';
import { deployment, rootName } from '../../contracts';
import {
  ConnectorFacet__factory,
  DiamondLoupeFacet__factory,
} from '../../contracts/types';
import { gateways } from '../constants';

export async function createIPFS() {
  const ipfs = IPFS.create({
    url: process.env.INFURA_IPFS_API_ENDPOINT,
    headers: {
      authorization:
        'Basic ' +
        Buffer.from(
          process.env.INFURA_IPFS_PROJECT_ID +
            ':' +
            process.env.INFURA_IPFS_API_KEY_SECRET
        ).toString('base64'),
    },
  });
  return ipfs;
}
export async function fetchFirstAvailable(cid: string, file?: string) {
  for (const schema of gateways) {
    let url;
    if (file) {
      url = `${schema.prefix}${cid}${schema.suffix}/${file}`;
    } else {
      url = `${schema.prefix}${cid}${schema.suffix}`;
    }
    try {
      const response = await fetch(url);
      if (response.ok) {
        const res = await response.json();
        return { res, schema };
      }
    } catch {
      console.log(`Fetch stopped: ${url}`);
    }
  }
  return { res: null, schema: null };
}

export async function getContractMetadata(
  address: string,
  library: ethers.providers.JsonRpcProvider | ethers.providers.FallbackProvider
) {
  //@ts-ignore
  const fromHexString = (hexString: string) =>
    new Uint8Array(
      //@ts-ignore
      hexString.match(/.{1,2}/g).map((byte) => parseInt(byte, 16))
    );
  const bytecode = await library.getCode(address);
  console.log('bytecode', bytecode);
  const ipfsHashLength = parseInt(
    `${bytecode.substring(bytecode.length - 4)}`,
    16
  );
  const cborEncoded = bytecode.substring(
    bytecode.length - 4 - ipfsHashLength * 2,
    bytecode.length - 4
  );
  const contractMetadata = decode(fromHexString(cborEncoded));

  const cidv0 = new CID(bs58.encode(contractMetadata.ipfs));
  const cidv1 = new CID(1, 'dag-pb', cidv0.bytes, 'base32').toString();

  const { res: file, schema: url } = await fetchFirstAvailable(cidv1);
  const name = Object.values(file.settings.compilationTarget)[0];
  // console.log('cid of', name, cidv1)
  const abi = file.output.abi;
  const devdoc = file.output.devdoc;
  const userdoc = file.output.userdoc;
  const urls = [url];
  return { name, abi, devdoc, userdoc, urls };
}

export async function getPilets(client: string) {
  const provider = new ethers.providers.JsonRpcProvider();
  const chainId = await provider.getNetwork().then((res) => {
    return res.chainId;
  });

  // declare contract
  const Diamond = deployment('Diamond', chainId);
  const ViewerFacet = deployment('ViewerFacet', chainId);
  const viewerfacet = new ethers.Contract(
    Diamond.address,
    ViewerFacet.abi,
    provider
  );

  // get installed packages from events
  const pkgs = await getPackages(client, provider, chainId);
  console.log('pkgs', pkgs);

  // get metadata of packages
  const metadata = await viewerfacet.metadataOf(pkgs);
  console.log('metadata', metadata);

  // fetch pilets
  const pilets = await Promise.all(
    metadata.map(async (meta: string) => {
      if (meta != '') {
        const { res: pilet, schema: url } = await fetchFirstAvailable(meta);

        if (pilet) {
          pilet.spec = pilet.type;
          pilet.link = `${url?.prefix}${pilet.link}${url?.suffix}/package/dist/index.js`;

          console.log('pilet found', pilet);
          return pilet;
        } else {
          console.log('pilet not found');
          return null;
        }
      } else {
        console.log('pilet not found');
        return null;
      }
    })
  );
  return pilets.length === 0 ? [] : pilets;
}

export function parseInstalls(logs: any[], schema: 'args' | 'data') {
  return logs
    .filter((upgrade) => upgrade[schema]?.install === true)
    .filter((upgrade) => {
      const uninstalls = logs.filter(
        (upgrade) => upgrade[schema]?.install === false
      );
      return uninstalls.every((uninstall) => {
        console.log('uninstall', uninstall);
        return uninstall.blockNumber < upgrade.blockNumber;
      });
    })
    .map((upgrade) => upgrade[schema]?.pkg);
}

export async function getPackages(
  client: string,
  provider: ethers.providers.JsonRpcProvider,
  chainId: number
) {
  const connectorfacet = new ethers.Contract(
    deployment('Diamond', chainId).address,
    ConnectorFacet__factory.abi,
    provider
  );

  /* event Upgrade (address indexed pkg, address indexed client, bool install); */
  const events = await connectorfacet.queryFilter(
    connectorfacet.filters.Upgrade(null, client, null),
    deployment('Diamond', chainId).block,
    'latest'
  );

  console.log('events', events);

  // check events for installs
  return parseInstalls(events, 'args');
}

export async function getClient(
  chainId: number,
  provider: ethers.providers.JsonRpcProvider
) {
  const name = window.location.hostname.split('.')[0];
  const node = ethers.utils.namehash(`${name}.${rootName}`);
  const Diamond = deployment('Diamond', chainId);
  const ViewerFacet = deployment('ViewerFacet', chainId);
  const viewerfacet = new ethers.Contract(
    Diamond.address,
    ViewerFacet.abi,
    provider
  );
  return await viewerfacet.addr(node);
}

export async function getABI(
  diamond: string,
  provider: ethers.providers.JsonRpcProvider | ethers.providers.FallbackProvider
) {
  const loupefacet = new ethers.Contract(
    diamond,
    DiamondLoupeFacet__factory.abi,
    provider
  );

  const facetAddresses = await loupefacet.facetAddresses();

  let abi: any[] = [];
  let not_found = [];

  for await (const address of facetAddresses) {
    let metadata: any;
    try {
      metadata = await getContractMetadata(address, provider);
    } catch (e) {
      console.error(`Fetch failed for ${address}`);
      not_found.push(address);
    }
    abi = abi.concat(metadata?.output.abi);
  }
  return { abi, not_found };
}

export function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}
