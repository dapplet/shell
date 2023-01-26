import { SlIconButton } from '@shoelace-style/shoelace/dist/react';
import Wallet from '../molecules/Wallet';
function Header() {
  return (
    <>
      <div id="header">
        <div className="flex items-center flex-row">
          <h1>{window.location.hostname.split('.')[0]}</h1>
          <a className="footer-item" href="/">
            <SlIconButton name="box-arrow-up-right" />
          </a>
        </div>
        <Wallet />
      </div>
    </>
  );
}

export default Header;
