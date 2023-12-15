import React from 'react';
// import { Link } from 'react-router-dom';
import './navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
      <img src={logo} alt="School Logo"/>
        </div>
      <div className="content-right">
          <button className="nav-button" onClick={() => console.log('Navigate to Homepage')}>Homepage</button>
          <button className="nav-button" onClick={() => console.log('Navigate to Login')}>Login</button>
          <button className="nav-button" onClick={() => console.log('Navigate to Dashboard')}>Dashboard</button>
          <button className="nav-button" onClick={() => console.log('Navigate to Missing Grade Form')}>Missing Grade Form</button>
          <button className="nav-button" onClick={() => console.log('Navigate to grade Report')}>Grade Report</button>
          <button className="nav-button" onClick={() => console.log('Navigate to instructor Contact Page ')}>Instructor Contact</button>
          <button className="nav-button" onClick={() => console.log('Navigate to Help and Support')}>Help & Support</button>
        </div>
        </nav>
  );
  };

export default Navbar;

