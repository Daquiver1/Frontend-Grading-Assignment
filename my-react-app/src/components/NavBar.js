import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header className="landing-page-header">
      <div className="logo">
        <p>GradeZone</p>
      </div>
      <nav className="navbar">
        <Link to="/grade-report" className="GradeReport">
          Grade Report
        </Link>
        <Link to="/missing-grade-form" className="nav-link">
          Missing Grade Form
        </Link>
        <Link to="/instructor-contact" className="nav-link">
          Instructor Contact
        </Link>
        <Link to="/help-and-support" className="nav-link">
          Help and Support
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;