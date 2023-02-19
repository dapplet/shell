import { useDeployments } from '../../contracts';
import { useViewerFacet } from '../../contracts/hooks/ViewerFacet';

export function useDappNameByAddress(address: string) {
  const diamond = useDeployments('Diamond')?.address;

  const { value: name } = useViewerFacet.nameOf(diamond, [[address]]) || {};

  return name;
}
