import { Config, Goerli, Hardhat, Mainnet, Sepolia } from '@usedapp/core';
import { deployment } from '../../contracts';
import { urlParams } from '../types';

const network = Sepolia;

export const config: Config = {
  readOnlyChainId: network.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: process.env.REACT_APP_INFURA_ETH_MAINNET_URL!,
    [Goerli.chainId]: process.env.REACT_APP_INFURA_ETH_GOERLI_URL!,
    [Sepolia.chainId]: process.env.REACT_APP_INFURA_ETH_SEPOLIA_URL!,
    [Hardhat.chainId]: 'http://localhost:8545',
    // 1337: 'http://localhost:7545',
  },
  multicallAddresses: {
    [Mainnet.chainId]: deployment('Multicall2', Mainnet.chainId)?.address,
    [Goerli.chainId]: deployment('Multicall2', Goerli.chainId)?.address,
    [Sepolia.chainId]: deployment('Multicall2', Sepolia.chainId)?.address,
    [Hardhat.chainId]: deployment('Multicall2', Hardhat.chainId)?.address,
    // 1337: deployment('Multicall2', 1337)?.address,
  },
  multicallVersion: 2,
};

export const gateways: urlParams[] = [
  {
    prefix: 'https://ipfs.io/ipfs/',
    suffix: '',
  },
];
