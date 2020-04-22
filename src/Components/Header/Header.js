import React from 'react';
import Logo from '../../Elements/Logo/Logo';
import tachyons from 'tachyons';

const Header = () => {
  return (
      <header class="bg-black-90 sticky ph3 pv3 pv4-ns ph4-m ph5-l">
        <nav class="f6 fw6 ttu tracked">
          <a class="link dim white dib mr3" href="http://localhost:3000" title="Home">My Weather</a>
        </nav>
      </header>
  );
}

export default Header;
