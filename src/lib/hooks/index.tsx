import { namehash } from '@ethersproject/hash';
import { useLayoutEffect, useState } from 'react';
import { rootName, useDeployments } from '../../contracts';
import { useViewerFacet } from '../../contracts/hooks/ViewerFacet';
import { getWindowDimensions } from '../actions';

export function useClient() {
  const diamond = useDeployments('Diamond');
  console.log('diamond', diamond.address);
  const name = window.location.hostname.split('.')[0];
  console.log('name', name);
  const node = namehash(`${name}.${rootName}`);
  console.log('node', node);
  const addr = useViewerFacet.addr(diamond?.address, [node])?.value?.[0];
  console.log('addr', addr);
  return addr;
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
