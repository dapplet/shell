import type {
  FallbackProvider,
  JsonRpcProvider,
} from '@ethersproject/providers';
import { NodeUrls } from '@usedapp/core';
import { ethers } from 'ethers';
import { getAddress } from 'ethers/lib/utils';
import { deployment } from '../../contracts';
import {
  ConnectorFacet__factory,
  ViewerFacet__factory,
} from '../../contracts/types';
import { config } from '../../lib/config';
import { gateways } from '../constants/gateways';

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

export async function getPilets() {
  const url = (config.readOnlyUrls as NodeUrls)[
    config.readOnlyChainId as keyof NodeUrls
  ] as string;
  console.log('asdf url', url);

  const provider = new ethers.providers.JsonRpcProvider(url);
  console.log('provider', provider);
  const chainId = await provider.getNetwork().then((res) => {
    return res.chainId;
  });
  console.log('chainId', chainId);
  const client = getDiamond();
  console.log('client', client);

  // declare contract
  const Diamond = deployment('Diamond', chainId);
  console.log('Diamond', Diamond);
  const viewerfacet = new ethers.Contract(
    Diamond.address,
    ViewerFacet__factory.abi,
    provider
  );

  console.log('viewerfacet', viewerfacet);

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
        return uninstall.blockNumber < upgrade.blockNumber;
      });
    })
    .map((upgrade) => upgrade[schema]?.pkg);
}

export async function getPackages(
  client: string,
  provider: JsonRpcProvider | FallbackProvider,
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

export function getDiamond() {
  const subdomain = window.location.hostname.split('.')[0];
  const addr = getAddress(subdomain);
  console.log('addr', addr);
  return addr;
}

export function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

//deploy new system (for localhost only)

// import contracts as a node package @dapplet/contracts

// insert into getPilets()
// if !(NODE_ENV === 'production') && any address under deployments[31337] is invalid, run deploySystem()
