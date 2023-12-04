import React from 'react';
import { Link } from 'react-router-dom';


const Header1 = () => {
  return (
    <header>
      <Link to="/">
        {/* Your Logo goes here */}
        <img src="/path/to/logo.png" alt="Logo" />
      </Link>
      <nav>
        <Link to="/login">LOGIN</Link>
      </nav>
    </header>
  );
};

export default Header1;
