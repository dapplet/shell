import { useNotifications } from '@usedapp/core';
import { isAddress } from 'ethers/lib/utils';
import PiralInstance from './components/templates/PiralInstance';
import { useClient } from './lib/hooks';
import { useTheme } from './lib/stores';

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
        {client && isAddress(client) && <PiralInstance diamond={client} />}
      </div>
    </main>
  );
};
