import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/grades">Grades</Link></li>
          <li><Link to="/help-support">Help & Support</Link></li>
          {/* Add more navigation links */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
