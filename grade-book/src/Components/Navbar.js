import React from "react";
import "../Styles/Navbar.css";
import logo from "../Images/logo.jpg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <ul>
        <li>
          <a href="/Home">Home</a>
        </li>
        <li>
          <a href="/Dashboard">Dashboard</a>
        </li>
        <li>
          <a href="/MissingGrade">Missing Grade</a>
        </li>
        <li>
          <a href="/GradeReport">Grade Report</a>
        </li>
        <li>
          <a href="/HelpAndSupport">Help</a>
        </li>
        <li>
          <a href="/Contact">Contact</a>
        </li>
        <li>
          <a href="/">logout</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
