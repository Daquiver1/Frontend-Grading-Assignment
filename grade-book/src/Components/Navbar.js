import React from "react";
import "../Styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
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
        
      </ul>
    </nav>
  );
};

export default Navbar;
