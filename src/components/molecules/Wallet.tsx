import { useEthers } from '@usedapp/core';

import { SlButton } from '@shoelace-style/shoelace/dist/react';

function Wallet() {
  const { account, deactivate, activateBrowserWallet } = useEthers();

  return (
    <div id="wallet">
      {account ? (
        <SlButton variant="text" onClick={() => deactivate()}>
          CONNECTED
        </SlButton>
      ) : (
        <SlButton variant="primary" onClick={() => activateBrowserWallet()}>
          CONNECT
        </SlButton>
      )}
    </div>
  );
}

export default Wallet;
