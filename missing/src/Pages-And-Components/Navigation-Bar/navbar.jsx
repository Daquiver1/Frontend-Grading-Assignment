import React from "react";
import './navbar.css'

function Navbar() {
  return (
   <nav className="nav">
    <a href="#" className="nav__brand">Missing Grade System</a>
    <ul className="nav__menu">
    <li className="nav__items">
      <a href="#" className="nav__link">
        Home
        </a>
        </li>
    <li className="nav__items">
      <a href="#" className="nav__link">
        Dashboard
        </a>
        </li>
    <li className="nav__items">
      <a href="#" className="nav__link">
        Login
        </a>
        </li>
    <li className="nav__items">
      <a href="#" className="nav__link">
        Grade Report
        </a>
        </li>
    <li className="nav__items">
      <a href="#" className="nav__link">
        Missing Grade Form
        </a>
        </li>
    <li className="nav__items">
      <a href="#" className="nav__link">
        Contact
        </a>
        </li>
    <li className="nav__items">
      <a href="#" className="nav__link">
        Help and Support
        </a>
        </li>
    </ul>
   </nav>
  );
};

export default Navbar;