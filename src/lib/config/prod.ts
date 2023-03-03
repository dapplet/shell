import { Config, Hardhat, Sepolia } from '@usedapp/core';
import { deployment } from '../../contracts';

const prod: Config = {
  readOnlyChainId: Sepolia.chainId,
  readOnlyUrls: {
    [Sepolia.chainId]: process.env.REACT_APP_INFURA_ETH_SEPOLIA_URL!,
    [Hardhat.chainId]: 'http://localhost:8545',
  },
  multicallAddresses: {
    [Sepolia.chainId]: deployment('Multicall2', Sepolia.chainId)?.address,
    [Hardhat.chainId]: deployment('Multicall2', Hardhat.chainId)?.address,
  },
  multicallVersion: 2,
};

export default prod;
