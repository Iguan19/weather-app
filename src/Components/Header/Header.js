import React from 'react';
//import Logo from '../../Elements/Logo/Logo';

const Header = () => {
  return (
      <div className="bg-black-90 sticky ph3 pv3 pv4-ns ph4-m ph5-l">
        <nav className="f6 fw6 ttu tracked">
          <a className="link dim white dib mr3" href="http://localhost:3000" title="Home">My Weather</a>
        </nav>
      </div>
  );
}

export default Header;