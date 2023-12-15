import React from "react";
import './navbar.css'

function Navbar() {
  return (
   <nav className="nav">
    <a href="#" className="nav__brand">Grade</a>
    <ul className="nav__menu">
    <li className="nav__items">
      <a href="Home" className="nav__link">
        Home
        </a>
        </li>
    <li className="nav__items">
      <a href="Dashboard" className="nav__link">
        Dashboard
        </a>
        </li>
    <li className="nav__items">
      <a href="LoginForm" className="nav__link">
        Login
        </a>
        </li>
    <li className="nav__items">
      <a href="GradesReport" className="nav__link">
        Grade Report
        </a>
        </li>
    <li className="nav__items">
      <a href="MissingGradeForm" className="nav__link">
        Missing Grade Form
        </a>
        </li>
    <li className="nav__items">
      <a href="instructorContactsS" className="nav__link">
        Contact
        </a>
        </li>
    <li className="nav__items">
      <a href="HelpandSupport" className="nav__link">
        Help and Support
        </a>
        </li>
    </ul>
   </nav>
  );
};

export default Navbar;