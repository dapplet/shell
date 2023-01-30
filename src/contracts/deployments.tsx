import { useEthers } from '@usedapp/core';
import { ethers } from 'ethers';
import deployments from './deployments.json';

export interface IDeployments {
  [key: number]: {
    [key: string]: {
      address: string;
      block: number;
      abi: any;
    };
  };
}

export function deployment(contractName: string, chainId: number) {
  return (deployments as IDeployments)[chainId as keyof IDeployments]?.[
    contractName
  ];
}

export function useDeployments(contractName: string) {
  return (deployments as IDeployments)[
    useEthers().chainId as keyof IDeployments
  ]?.[contractName];
}

export function useFacet(contractName: string) {
  return new ethers.Contract(
    useDeployments(contractName)?.abi,
    useDeployments('Diamond')?.address,
    useEthers().library
  );
}

export const rootName = 'dapptest.eth';