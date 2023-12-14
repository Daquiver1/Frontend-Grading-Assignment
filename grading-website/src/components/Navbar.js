import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="school-logo">
            <img
              src={process.env.PUBLIC_URL + "./images/ug_standard_new_sl_1.png"}
              alt="School-Logo"
            />
          </div>
          <div className="tabs-container">
            <ul className="nav nav-underline justify-content-end">
              <li className="nav-item">
                <a
                  className="nav-link --bs-body-bg-rgb"
                  href="http://localhost:3000"
                >
                  Home
                </a>
              </li>
              <li className="nav-item ">
                <a
                  className="nav-link --bs-body-bg-rgb"
                  href="http://localhost:3000/login"
                >
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link --bs-body-bg-rgb" href="#">
                  Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link --bs-body-bg-rgb"
                  href="http://localhost:3000/report"
                >
                  Grade Report
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link nav-underline"
                  href="http://localhost:3000/missing"
                >
                  Grade Form
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link nav-underline"
                  href="http://localhost:3000/instructors"
                >
                  Instructor Contact
                </a>
              </li>
              <li className="nav-item">
                <a class="nav-link " href="http://localhost:3000/help">
                  Help and Support
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
