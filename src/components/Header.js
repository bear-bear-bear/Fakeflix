/* modules */
import React from 'react';
import { Link } from 'react-router-dom';

/* css */
import './Header.css';

const Navigation = () => {
  return (
    <nav className="header__nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

const Logo = () => {
  return <p className="header__logo">flix</p>;
};

const Header = () => {
  return (
    <header className="app-header">
      <Logo />
      <Navigation />
    </header>
  );
};

export default Header;
