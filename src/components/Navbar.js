import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import your CSS file

const Navbar = () => {
  return (

    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/grade-report">Grade Report</Link>
      <Link to="/missing-grade-form">Missing Grade Form</Link>
      <Link to="/instructor-contact">Instructor Contact</Link>
      <Link to="/help-and-support">Help and Support</Link>
    </nav>
  
  );
};

export default Navbar;
