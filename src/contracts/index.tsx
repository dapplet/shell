import { Config, Goerli, Hardhat, Mainnet, useEthers } from '@usedapp/core';
import deployments from './deployments.json';

export const rootName = 'dapptest.eth';

const network = Hardhat;

export const config: Config = {
  readOnlyChainId: network.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: process.env.REACT_APP_INFURA_ETH_MAINNET_URL!,
    [Goerli.chainId]: process.env.REACT_APP_INFURA_ETH_GOERLI_URL!,
    [Hardhat.chainId]: 'http://localhost:8545',
  },
  multicallAddresses: {
    [Mainnet.chainId]: deployment('Multicall2', Mainnet.chainId)?.address,
    [Goerli.chainId]: deployment('Multicall2', Goerli.chainId)?.address,
    [Hardhat.chainId]: deployment('Multicall2', Hardhat.chainId)?.address,
  },
  multicallVersion: 2,
};

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
