import React from 'react';
import './Header.scss';

const Header = () => {
  return (
      <div className="header">
        <nav className="headerNav">
          <a className="link" href="http://localhost:3000" title="Home">Weather APP</a>
        </nav>
      </div>
  );
}

export default Header;