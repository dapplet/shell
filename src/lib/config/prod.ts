import { Config, Sepolia } from '@usedapp/core';
import { deployment } from '../../contracts';

const production: Config = {
  readOnlyChainId: Sepolia.chainId,
  readOnlyUrls: {
    [Sepolia.chainId]: process.env.REACT_APP_INFURA_ETH_SEPOLIA_URL!,
  },
  multicallAddresses: {
    [Sepolia.chainId]: deployment('Multicall2', Sepolia.chainId)?.address,
  },
  multicallVersion: 2,
};

export default production;
