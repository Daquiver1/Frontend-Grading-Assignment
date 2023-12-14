import React from "react";
import "../Styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="/HomePage">Home</a>
        </li>
        <li>
          <a href="/DashboardPage">Dashboard</a>
        </li>
        <li>
          <a href="/MissingGradePage">Missing Grade</a>
        </li>
        <li>
        <a href="/GradeReportPage">Grade Report</a>
        </li>
        <li>
        <a href=".HelpAndSupportPage">Help</a>
        </li>
        <li>
        <a href="../Components/ContactPage">Contact</a>
        </li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
