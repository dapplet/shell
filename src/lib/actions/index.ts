import { ethers } from 'ethers';
import { deployment, rootName } from '../../contracts';
import {
  ConnectorFacet__factory,
  ViewerFacet__factory,
} from '../../contracts/types';
import { gateways } from '../constants';

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
      console.error(`Fetch stopped: ${url}`);
    }
  }
  return { res: null, schema: null };
}

export async function getPilets(client: string) {
  const provider = new ethers.providers.JsonRpcProvider();
  const chainId = await provider.getNetwork().then((res) => {
    return res.chainId;
  });

  // declare contract
  const Diamond = deployment('Diamond', chainId);
  const viewerfacet = new ethers.Contract(
    Diamond.address,
    ViewerFacet__factory.abi,
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
          pilet.spec = pilet.type; //delete later
          pilet.link = `${url?.prefix}${pilet.link}${url?.suffix}/dist/index.js`;

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
  console.log('connectorfacet', connectorfacet);

  /* event Upgrade (address indexed pkg, address indexed client, bool install); */
  const events = await connectorfacet.queryFilter(
    connectorfacet.filters.Upgrade(null, client, null),
    'earliest',
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
  console.log('name', name);
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

export function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}
