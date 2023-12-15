import React from "react";
import "./Navigation.css"; // Import the corresponding CSS file

const Navigation = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-header">
          <h3>Grade System</h3>
        </div>
        <ul className="sidebar-list">
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="#grade-report">Grade Report</a>
          </li>
          <li>
            <a href="report_missing_grade.html">Report Missing Grade</a>
          </li>
          <li>
            <a href="contact_instructor.html">Contact Instructor</a>
          </li>
          <li>
            <a href="help_support.html">Help & Support</a>
          </li>
        </ul>
      </div>

      <div className="main-content">
        <header className="navbar">
          <div className="header">
            <div className="dept-logo">
              <a href="index.html">
                <img
                  src="img/CS_logo.png"
                  className="logo"
                  alt="Computer Science Department"
                />
              </a>
            </div>
            <nav className="navbar">
              <ul>
                <li>
                  <a href="index.html">Dashboard</a>
                </li>
                <li>
                  <a href="about.html">Grade Report</a>
                </li>
                <li>
                  <a href="gallery.html" target="_blank">
                    Missing Grade Report
                  </a>
                </li>
                <li>
                  <a href="contact.html">Contact Instructor</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <div className="content">
          {/* Your main content goes here */}
          <p>This is the main content area.</p>
        </div>
        <footer>
          <p>&copy; 2023 Missing Grade Reporting System</p>
        </footer>
      </div>
    </>
  );
};

export default Navigation;
