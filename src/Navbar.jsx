

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/grade-report">Grade Report</Link></li>
        <li><Link to="/missing-grade-form">Missing Grade Form</Link></li>
        <li><Link to="/help-and-support">Help and Support</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
