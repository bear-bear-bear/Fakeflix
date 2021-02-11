/* modules */
import React from 'react';
import { Link } from 'react-router-dom';

/* css */
import './Logo.css';

const Logo = () => {
  return (
    <Link to="/" className="app-logo">
      fakeflix
    </Link>
  );
};

export default Logo;
