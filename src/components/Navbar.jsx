import React, { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { Link } from "react-router-dom";

function Navbar() {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="border-bottom shadow-sm">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          RESULT CHECK
        </Link>

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
            {/* Additional Pages */}
            <li className="nav-item">
              <Link className="nav-link" to="/posters">
                Home
              </Link>
            </li>
            {/* Add more similar <li> elements for additional pages */}
            {/* Example: */}
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/gradeReport">
                GradeReport
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/instructorContact">
                InstructorContact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/missingGrade">
              MissingGrade
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/help">
                Help
              </Link>
            </li>
            {/* Adjust as per your additional page routes */}
          </ul>
          <span className="ml-auto">{currentUser?.username}</span>
          {currentUser ? (
            <span className="ml-2" onClick={logout}>
              logout
            </span>
          ) : (
            <span>
              <Link to="/login">Login</Link>
            </span>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
