// Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import a CSS file for styling

interface HeaderProps {
  // Add any necessary props
}

const Header: React.FC<HeaderProps> = () => {
  const logoImagePath = 'OIP5.jpg'; // Add the path to your logo image

  return (
    <header className="center-align"> {/* Add the center-align class */}
      <div>
        <img src={logoImagePath} alt="Logo" />
        <h1>WELCOME TO MISSING GRADES REPORTING SYSTEM</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/login">LOGIN</Link>
          </li>
          <li>
            <Link to="/dashboard">DASHBOARD</Link>
          </li>
          <li>
            <Link to="/grade-report">GRADE REPORT</Link>
          </li>
          <li>
            <Link to="/missing-grade-form">MISSING GRADE REPORT FORM</Link>
          </li>
          <li>
            <Link to="/instructor-contact">INSTRUCTOR CONTACT</Link>
          </li>
          <li>
            <Link to="/help-and-support">HELP AND SUPPORT</Link>
          </li>
          {/* Add more navigation links for other pages */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
