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
        <button className="navs">
          <Link to="/grade-report" className="GradeReport">
            Grade Report
          </Link>
        </button>
        <button className="navs">
          <Link to="/missing-grade-form" className="nav-link">
            Missing Grade Form
          </Link>
        </button>
        <button className="navs">
          <Link to="/instructor-contact" className="nav-link">
            Instructor Contact
          </Link>
        </button>
        <button className="navs">
          <Link to="/help-and-support" className="nav-link">
            Help and Support
          </Link>
        </button>
      </nav>
    </header>
  );
};

export default NavBar;