import React, { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { Link } from "react-router-dom";
import './Navbar.css'; // Import the CSS file

function Navbar() {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navbar-wrapper"> {/* This div wraps the entire navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="navbar-brand">
        <h1 style={{ display: 'inline-block', color: '#000' }}>Grade</h1>
  <h1 style={{ display: 'inline-block', color: '#3498db' }}>Sentry</h1>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {/* Links */}
            <li className="nav-item">
              <Link className="nav-link" to="/home1">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dashBoard">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/gradeReport">
                Grade Report
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/missingGrade">
                Missing Grade
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/instructor">
                Instructor Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/help">
                Help
              </Link>
            </li>
            {/* Add more navigation links as needed */}
          </ul>

           {/* User Authentication and Logout */}
           {currentUser ? (
            <span className="ml-auto">
              <span className="ml-2 login-btn" onClick={logout}>
                Logout
              </span>
            </span>
          ) : (
            <span className="ml-auto">
              <Link to="/login" className="login-btn">Login</Link>
            </span>
          )}
        </div>
      </nav>
    </div>
  );
}
export default Navbar;