import { useEthers } from '@usedapp/core';
import { ethers } from 'ethers';
import { useEffect, useLayoutEffect, useState } from 'react';
import { rootName, useDeployments } from '../../contracts';
import { useViewerFacet } from '../../contracts/hooks/ViewerFacet';
import { getWindowDimensions } from '../actions';

import IPFS, { IPFSHTTPClient } from 'ipfs-http-client';
import { getABI } from '../actions';

import { useMemo } from 'react';

export function useIPFS() {
  const ipfs = useMemo(() => {
    return IPFS.create({
      url: process.env.REACT_APP_INFURA_IPFS_API_ENDPOINT,
      headers: {
        authorization:
          'Basic ' +
          Buffer.from(
            process.env.REACT_APP_INFURA_IPFS_PROJECT_ID +
              ':' +
              process.env.REACT_APP_INFURA_IPFS_API_KEY_SECRET
          ).toString('base64'),
      },
    });
  }, []);
  return ipfs as IPFSHTTPClient;
}

export function useClient() {
  const diamond = useDeployments('Diamond');
  const name = window.location.hostname.split('.')[0];
  const node = ethers.utils.namehash(`${name}.${rootName}`);
  return useViewerFacet.addr(diamond?.address, [node])?.value?.[0];
}

export function useABI(diamond: string) {
  const { library } = useEthers();

  return useEffect(() => {
    if (library) {
      getABI(diamond, library).then(({ abi, not_found }) => {
        console.log(abi);
        console.log(not_found);
      });
    }
  }, [library]);
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useLayoutEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
