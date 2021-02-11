/* modules */
import React from 'react';

/* components */
import Navigation from './Navigation';
import Logo from './Logo';

/* css */
import './Header.css';

const Header = () => {
  return (
    <header className="app-header">
      <Logo />
      <Navigation />
    </header>
  );
};

export default Header;
