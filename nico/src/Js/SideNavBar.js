// SideNavBar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Css/SideNavBar.css";

const SideNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`side-nav ${isOpen ? "open" : ""}`}>
      <button className="toggle-btn" onClick={toggleNavBar}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/grade-report">Grade Report</Link>
          </li>
          <li>
            <Link to="/missing-grade-form">Missing Grade Form</Link>
          </li>
          <li>
            <Link to="/instructor-contact">Instructor Contact</Link>
          </li>
          <li>
            <Link to="/help-and-support">Help & Support</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/">Logout</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideNavBar;
