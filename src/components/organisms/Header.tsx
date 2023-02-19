import { SlIcon, SlIconButton, SlSwitch } from '../../design/shoelace';
import { useDiamond } from '../../lib/hooks';
import { useDappNameByAddress } from '../../lib/shared';
import { useTheme } from '../../lib/stores';
import Wallet from '../molecules/Wallet';
function Header() {
  const toggleTheme = useTheme((state) => state.toggle);
  const theme = useTheme((state) => state.theme);

  const address = useDiamond();

  const name = useDappNameByAddress(address);

  return (
    <>
      <div id="header">
        <div className="flex items-center flex-row">
          <h1>{name}</h1>
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
