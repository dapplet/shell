import { SlCard } from '@shoelace-style/shoelace/dist/react';
import {
  ComponentsState,
  createInstance,
  ErrorComponentsState,
  Piral,
  SwitchErrorInfo,
} from 'piral-core';
import { createDashboardApi, Dashboard } from 'piral-dashboard';
import { createNotificationsApi, Notifications } from 'piral-notifications';
import { memo } from 'react';
import { Link } from 'react-router-dom';
import { getPilets } from '../../lib/actions';
import Header from '../organisms/Header';

export const errors: Partial<ErrorComponentsState> = {
  not_found: () => (
    <div>
      <p className="error">
        Could not find the requested page. Are you sure it exists?
      </p>
      <p>
        Go back <Link to="/">to the dashboard</Link>.
      </p>
    </div>
  ),
};

export const layout: Partial<ComponentsState> = {
  ErrorInfo: (props) => (
    <div>
      <h1>Error</h1>
      <SwitchErrorInfo {...props} />
    </div>
  ),
  Layout: ({ children }) => (
    <div>
      <Header />
      <Notifications />
      <div id="body">{children}</div>
    </div>
  ),
  DashboardTile: ({ columns, rows, children }) => (
    <SlCard className={`tile cols-${columns} rows-${rows}`}>{children}</SlCard>
  ),
  DashboardContainer: ({ children }) => <div className="tiles">{children}</div>,
  LoadingIndicator: () => <></>,
  NotificationsHost: ({ children }) => (
    <div className="notifications">{children}</div>
  ),
  NotificationsToast: ({ options, onClose, children }) => (
    <div className={`notification-toast ${options.type}`}>
      <div className="notification-toast-details">
        {options.title && (
          <div className="notification-toast-title">{options.title}</div>
        )}
        <div className="notification-toast-description">{children}</div>
      </div>
      <div className="notification-toast-close" onClick={onClose} />
    </div>
  ),
};

export interface InstanceProps {
  diamond: string;
}

export const PiralInstance = memo(({ diamond }: InstanceProps) => {
  // register base menu item

  const instance = createInstance({
    id: diamond,
    state: {
      components: layout,
      errorComponents: errors,
      routes: {
        '/': Dashboard,
      },
      data: {
        'proxy-address': {
          expires: -1,
          owner: 'root',
          target: 'memory',
          value: diamond,
        },
      },
    },
    // actions: {},
    plugins: [createDashboardApi(), createNotificationsApi()],
    async: true,
    async requestPilets() {
      const pilets = await getPilets(diamond);
      // console.log('pilets', pilets);
      return Promise.resolve(pilets);
    },
    shareDependencies(dependencies) {
      return {
        ...dependencies,
        'dapp-shell': require('@usedapp/core'),
      };
    },
  });

  instance.root.registerTile(
    () => <a href={`https://dapplet.app/dapps/${diamond}`}>Stats</a>,
    {
      initialColumns: 1,
      initialRows: 1,
    }
  );

  return <Piral instance={instance} />;
});

export default PiralInstance;
