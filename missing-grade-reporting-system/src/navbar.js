import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* <div className="logo">
        <img src="src/components/logo1.jpg" alt="School Logo" />
      </div>
      <div className="nav-links">
        <Link to="/LandingPage.js">Home</Link>
        <Link to="/loginpage.js">Login</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/grade-report">Grade Report</Link>
        <Link to="/missing-grade-form">Missing Grade Form</Link>
        <Link to="/instructor-contact">Instructor Contact</Link>
        <Link to="/help-and-support">Help and Support</Link>
      </div> */}
    </nav>
  );
};

export default Navbar;

