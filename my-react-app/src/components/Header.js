// Header.js

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/header">Header</Link>
        </li>
        <li>
          <Link to="/grade-report">Grade Report</Link>
        </li>
        <li>
          <Link to="/missing-grade-form">Missing Grade Form</Link> {/* Add this line */}
        </li>
      </ul>
    </nav>
  );
};

export default Header;
