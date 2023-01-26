import '@shoelace-style/shoelace/dist/themes/dark.css';
import '@shoelace-style/shoelace/dist/themes/light.css';
import { useNotifications } from '@usedapp/core';
import { ethers } from 'ethers';
import PiralInstance from './components/templates/PiralInstance';
import { useClient } from './lib/hooks';
import { useTheme } from './lib/stores';

import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path';
setBasePath(
  'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.88/dist/'
);

export const App: React.FC = () => {
  const themePrefix = 'sl-theme-';
  const themeSuffix = useTheme((state) => state.theme); //dark or light
  const theme = themePrefix + themeSuffix;

  const client = useClient();

  const notifications = useNotifications();
  console.log('notifications', notifications);

  return (
    <main id="app-layout" className={theme}>
      <div id="main">
        {ethers.utils.isAddress(client!) && <PiralInstance diamond={client!} />}
      </div>
    </main>
  );
};
