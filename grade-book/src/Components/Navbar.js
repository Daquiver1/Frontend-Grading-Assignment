import React from "react";
import "../Styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="../Components/HomePage">Home</a>
        </li>
        <li>
          <a href="../Components/DashboardPage">Dashboard</a>
        </li>
        <li>
          <a href="../Components/MissingGradePage">Missing Grade</a>
        </li>
        <li>
        <a href="../Components/GradeReportPage">Grade Report</a>
        </li>
        <li>
        <a href="../Components/HelpAndSupportPage">Help</a>
        </li>
        <li>
        <a href="../Components/ContactPage">Contact</a>
        </li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
