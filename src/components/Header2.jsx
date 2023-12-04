import React from 'react';
import { Link } from 'react-router-dom';


const Header2 = () => {
  return (
    <header>
      <Link to="/dashboard">
        {/* Your Logo goes here */}
        <img src="/path/to/logo.png" alt="Logo" />
      </Link>
      <nav>
        <Link to="/login">Logout</Link>
      </nav>
    </header>
  );
};

export default Header2;
