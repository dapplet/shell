import { Config, Goerli, Mainnet, Sepolia } from '@usedapp/core';
import { deployment } from '../../contracts';

const production: Config = {
  readOnlyChainId: Sepolia.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: process.env.REACT_APP_INFURA_ETH_MAINNET_URL!,
    [Goerli.chainId]: process.env.REACT_APP_INFURA_ETH_GOERLI_URL!,
    [Sepolia.chainId]: process.env.REACT_APP_INFURA_ETH_SEPOLIA_URL!,
  },
  multicallAddresses: {
    [Mainnet.chainId]: deployment('Multicall2', Mainnet.chainId)?.address,
    [Goerli.chainId]: deployment('Multicall2', Goerli.chainId)?.address,
    [Sepolia.chainId]: deployment('Multicall2', Sepolia.chainId)?.address,
  },
  multicallVersion: 2,
};

export default production;
