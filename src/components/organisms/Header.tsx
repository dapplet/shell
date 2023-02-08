import { SlIcon, SlIconButton, SlSwitch } from '../../design/shoelace';
import { useTheme } from '../../lib/stores';
import Wallet from '../molecules/Wallet';
function Header() {
  const toggleTheme = useTheme((state) => state.toggle);
  const theme = useTheme((state) => state.theme);

  return (
    <>
      <div id="header">
        <div className="flex items-center flex-row">
          <h1>{window.location.hostname.split('.')[0]}</h1>
          <a className="footer-item" href="/">
            <SlIconButton name="box-arrow-up-right" />
          </a>
        </div>
        <div className="flex items-center gap-2">
          <SlSwitch
            className="menu-switch"
            checked={theme === 'dark'}
            onSlChange={toggleTheme}
          />
          <SlIcon name="moon" />
          <Wallet />
        </div>
      </div>
    </>
  );
}

export default Header;
