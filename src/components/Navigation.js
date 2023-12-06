import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
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
          <li><NavLink to="/" activeClassName ='active' >Home</NavLink></li>
          <li><NavLink to="/login" activeClassName ='active'>Register</NavLink></li>
          <li><NavLink to="/about" activeClassName ='active' >About</NavLink></li>
          <li><NavLink to="/contact" activeClassName ='active' >Contact</NavLink></li>
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


  const isLandingPage = location.pathname === '/';
  if (isLandingPage) {
    return null; // Do not render Navbar on the dashboard page
  }


  return (
    <nav className="navbar-container">
      <div className="navbar-logo">
        <img src="/ug.png" alt="University Logo" />
      </div>
      <ul className="navbar-links">
        <li><NavLink to="/" activeClassName ='active' >Home</NavLink></li>
        <li><NavLink to="/DashboardPage"activeClassName ='active' >Dashboard</NavLink></li>
        <li><NavLink to="/GradeReportPage" activeClassName ='active' >GradeReportPage</NavLink></li>
        <li><NavLink to="/missing-grade-form" activeClassName ='active' >Missing Grade Form</NavLink></li>
        <li><NavLink to="/instructor-contact" activeClassName ='active' >Instructor Contact</NavLink></li>
        <li><NavLink to="/help-page" activeClassName ='active' >HelpAndSupport</NavLink></li>
      </ul>
      <div className="navbar-social">
        <a href="https://twitter.com/university" target="_blank" rel="noopener noreferrer">
          <img src="/twitter.png" alt="Twitter" />
        </a>
        <a href="https://facebook.com/university" target="_blank" rel="noopener noreferrer">
          <img src="/facebook.png" alt="Facebook" />
        </a>
      </div>
      <div className="navbar-logout">
        <NavLink to="/login">Logout</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
