import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
function NavBar() {
  return (
    <>
      <header className="header">
        <nav>
          <div className="logo">
            <h1 className="logo"><strong>GradePal</strong></h1>
          </div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/grades">Grade <ab className="ab">Report</ab></Link>
            </li>
            <li>
              <Link to="/missing-grade-form"><ab className="ab">Missing Grade</ab> Form</Link>
            </li>
            <li>
              <Link to="/contact-instructor"><ab className="ab">Instructor</ab> Contact</Link>
            </li>
            <li>
              <Link to="/help-and-support"><ab className="ab">Help and</ab> Support</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
