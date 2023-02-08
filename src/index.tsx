import { Config, DAppProvider, Goerli, Mainnet } from '@usedapp/core';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { deployment } from './contracts';

export const config: Config = {
  readOnlyChainId: 5,
  readOnlyUrls: {
    [Mainnet.chainId]: process.env.REACT_APP_INFURA_ETH_MAINNET_URL!,
    [Goerli.chainId]: process.env.REACT_APP_INFURA_ETH_GOERLI_URL!,
    // [Hardhat.chainId]: 'http://localhost:8545',
  },
  multicallAddresses: {
    [Mainnet.chainId]: deployment('Multicall2', Mainnet.chainId)?.address,
    [Goerli.chainId]: deployment('Multicall2', Goerli.chainId)?.address,
    // [Hardhat.chainId]: deployment('Multicall2', Hardhat.chainId)?.address,
  },
  multicallVersion: 2,
};

render(
  <DAppProvider config={config}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </DAppProvider>,
  document.querySelector('#app')
);
