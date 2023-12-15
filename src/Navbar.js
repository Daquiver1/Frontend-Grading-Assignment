// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          MissingGradeSystem
        </Link>

        <div className="navbar-links">
          <Link to="/" className="navbar-link">
            Home
          </Link>
          <Link to="/dashboard" className="navbar-link">
            Dashboard
          </Link>
          <Link to="/missing-grade-form" className="navbar-link">
            Report Missing Grade
          </Link>
          <Link to="/instructor-contact" className="navbar-link">
            Instructor Contact
          </Link>
          <Link to="/help-and-support" className="navbar-link">
            Help & Support
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
