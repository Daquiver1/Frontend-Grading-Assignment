// common/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import a CSS file for styling

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/landing" className="nav-link">
            LANDING
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            LOGIN
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/dashboard" className="nav-link">
            DASHBOARD
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/grade-report" className="nav-link">
            GRADE REPORT
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/missing-grade-form" className="nav-link">
            MISSING GRADE FORM
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/instructor-contact" className="nav-link">
            INSTRUCTOR CONTACT
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/help-and-support" className="nav-link">
            HELP AND SUPPORT
          </Link>
        </li>
        {/* Add more navigation links as needed */}
      </ul>
    </nav>
  );
};

export default Navbar;
