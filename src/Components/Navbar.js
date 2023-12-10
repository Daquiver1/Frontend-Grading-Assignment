import React, { useState } from "react";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className="logo">
        <img className="logo-img" src={require("../Images/logo.png")} alt="" />
      </div>
      <div
        className="menu"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="nav-list">
        <ul className={menuOpen ? "open" : ""}>
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/dashboard">
              Dashboard
            </Link>
          </li>
          <li>
            <Link className="link" to="/report">
              Report
            </Link>
          </li>
          <li>
            <Link className="link" to="/missing-grade">
              Missing-Grade
            </Link>
          </li>
          <li>
            <Link className="link" to="/instructorContact">
              Instructor-contact
            </Link>
          </li>
          <li>
            <Link className="link" to="/help">
              Help
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
