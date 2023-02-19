import { DAppProvider } from '@usedapp/core';
import {
  ComponentsState,
  ErrorComponentsState,
  Piral,
  SwitchErrorInfo,
  createInstance,
} from 'piral-core';
import { Dashboard, createDashboardApi } from 'piral-dashboard';
import { Notifications, createNotificationsApi } from 'piral-notifications';
import { Link } from 'react-router-dom';
import { SlAlert, SlCard, SlIcon } from '../../design/shoelace';
import { getPilets } from '../../lib/actions';
import { config } from '../../lib/constants';
import Header from '../organisms/Header';
import ThemeProvider from './ThemeProvider';

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

//TODO: send usedapp notifications to Piral notifications -- I think we will need to create our own piral NotificationsAPI to do this

// if wallet is not connected, show a notification to connect wallet

//TODO: drop this, use the colorcodes from shoelace
function alertType(
  type:
    | 'info'
    | 'primary'
    | 'success'
    | 'warning'
    | 'error'
    | 'danger'
    | 'neutral'
) {
  switch (type) {
    case 'info' || 'primary':
      return 'primary';
    case 'success':
      return 'success';
    case 'warning':
      return 'warning';
    case 'error' || 'danger':
      return 'danger';
    case 'neutral' || 'default' || undefined:
      return 'neutral';
  }
}

export const layout: Partial<ComponentsState> = {
  ErrorInfo: (props) => (
    <div>
      <h1>Error</h1>
      <SwitchErrorInfo {...props} />
    </div>
  ),
  // TODO: change from Header to Footer? -- issue is notifications get in the way of header items
  Layout: ({ children }) => (
    <DAppProvider config={config}>
      <ThemeProvider>
        <div id="main">
          <Header />
          <Notifications />
          <div id="body">{children}</div>
        </div>
      </ThemeProvider>
    </DAppProvider>
  ),
  DashboardTile: ({ columns, rows, children }) => (
    <SlCard className={`tile cols-${columns} rows-${rows}`}>{children}</SlCard>
  ),
  DashboardContainer: ({ children }) => <div className="tiles">{children}</div>,
  LoadingIndicator: () => <></>,
  NotificationsHost: ({ children }) => (
    <div className="sl-toast-stack">{children}</div>
  ),
  NotificationsToast: ({ options, onClose, children }) => (
    <SlAlert
      variant={alertType(options.type as any)}
      duration={3000}
      open={true}
      closable
      onSlAfterHide={onClose}
    >
      <div className="flex flex-row items-center gap-2">
        <SlIcon slot="icon" name="info-circle" />
        {options.title && <strong>{options.title}</strong>}
        <br />
        <div> {children}</div>
      </div>
    </SlAlert>
  ),
};

export const PiralInstance = () => {
  // register base menu item

  const instance = createInstance({
    state: {
      components: layout,
      errorComponents: errors,
      routes: {
        '/': Dashboard,
      },
    },
    // actions: {},
    plugins: [createDashboardApi(), createNotificationsApi()],
    async: true,
    async requestPilets() {
      const pilets = await getPilets();
      console.log('pilets', pilets);
      return Promise.resolve(pilets);
    },
  });

  return <Piral instance={instance} />;
};

export default PiralInstance;
