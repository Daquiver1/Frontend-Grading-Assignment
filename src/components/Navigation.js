import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  const location = useLocation();

  const isLoginPage = location.pathname === '/login';

  if (isLoginPage) {
    return (
      <nav className="navbar-container">
        <div className="navbar-logo">
          <img src="/ug.png" alt="University Logo" />
        </div>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Register</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="navbar-social">
          <a href="https://twitter.com/university" target="_blank" rel="noopener noreferrer">
            <img src="/twitter.png" alt="Twitter" />
          </a>
          <a href="https://facebook.com/university" target="_blank" rel="noopener noreferrer">
            <img src="/facebook.png" alt="Facebook" />
          </a>
          {/* Add more social media icons as needed */}
        </div>
      </nav>
    );
  }


  const isDashboardPage = location.pathname === '/';
  if (isDashboardPage) {
    return null; // Do not render Navbar on the dashboard page
  }


  // If the user is not on the login page, show the standard Navbar
  return (
    <nav className="navbar-container">
      <div className="navbar-logo">
        {/* University logo or branding */}
        <img src="/ug.png" alt="University Logo" />
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/grade-report">Grade Report</Link></li>
        <li><Link to="/missing-grade-form">Missing Grade Form</Link></li>
        <li><Link to="/instructor-contact">Instructor Contact</Link></li>
        <li><Link to="/help-and-support">HelpAndSupport</Link></li>
      </ul>
      <div className="navbar-social">
        {/* Social media handles/icons */}
        <a href="https://twitter.com/university" target="_blank" rel="noopener noreferrer">
          <img src="/twitter.png" alt="Twitter" />
        </a>
        <a href="https://facebook.com/university" target="_blank" rel="noopener noreferrer">
          <img src="/facebook.png" alt="Facebook" />
        </a>
        {/* Add more social media icons as needed */}
      </div>
      <div className="navbar-logout">
        {/* Add Logout button */}
        <Link to="/login">Logout</Link>
      </div>
    </nav>
  );
}

export default Navbar;
