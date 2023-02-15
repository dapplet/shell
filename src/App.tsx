import { useEthers } from '@usedapp/core';
import { isAddress } from 'ethers/lib/utils';
import PiralInstance from './components/templates/PiralInstance';
import { useClient } from './lib/hooks';
import { useTheme } from './lib/stores';

export const App: React.FC = () => {
  const themePrefix = 'sl-theme-';
  const themeSuffix = useTheme((state) => state.theme); //dark or light
  const theme = themePrefix + themeSuffix;

  const { library } = useEthers();
  const client = useClient();

  return (
    <main id="app-layout" className={theme}>
      <div id="main">
        {library && client && isAddress(client) ? (
          <PiralInstance provider={library} diamond={client} />
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </main>
  );
};
