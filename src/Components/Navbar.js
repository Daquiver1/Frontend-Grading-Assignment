import React from "react";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo">
        <img className="logo-img" src={require("../Images/logo.png")} alt="" />
      </div>
      <div className="nav-list">
        <ul>
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
            <Link className="link" to="/instructorContact">
              Instructor-contact
            </Link>
          </li>
          <li>
            <Link className="link" to="/missing-grade">
              Missing-grade
            </Link>
          </li>
          <li>
            <Link className="link" to="/help">
              Help
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
