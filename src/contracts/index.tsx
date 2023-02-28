import { useEthers } from '@usedapp/core';
import { config } from '../lib/constants';
import deployments from './deployments.json';

export const rootName = 'dapptest.eth';

export interface IDeployments {
  [key: number]: {
    [key: string]: {
      address: string;
      abi?: any;
    };
  };
}

export function deployment(contractName: string, chainId: number) {
  return (deployments as IDeployments)[chainId as keyof IDeployments]?.[
    contractName
  ];
}

//useInterface -- fetch from typechain files

export function useDeployments(contractName: string) {
  const chainId = useEthers().chainId || (config.readOnlyChainId as number);
  return (deployments as IDeployments)[chainId as keyof IDeployments]?.[
    contractName
  ];
}

// export function useFacet(contractName: string) {
//   return new ethers.Contract(
//     useDeployments(contractName)?.abi,
//     useDeployments('Diamond')?.address,
//     useEthers().library
//   );
// }
