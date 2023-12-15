import React from "react";
import "./Dashboard.css"; // Import the corresponding CSS file

const Dashboard = () => {
  return (
    <>
      <header className="header">
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
      </header>

      <main className="grid-container">
        <section id="grade-report" className="grid-item">
          <h2>Grade Report Page</h2>
          <p>Detailed view of all courses and respective grades.</p>
          <p>Filter by semester/academic year.</p>
          <button
            className="learn-more"
            onClick={() => (window.location.href = "#")}
          >
            View Grade Report
          </button>
        </section>

        <section id="missing-grade-form" className="grid-item">
          <h2>Missing Grade Form Page</h2>
          <p>Form to report a missing grade:</p>
          <button className="learn-more" type="submit">
            Report Missing Grade
          </button>
        </section>

        <section id="instructor-contact" className="grid-item">
          <h2>Instructor Contact Page</h2>
          <p>List of instructors with contact details.</p>
          <button
            className="learn-more"
            onClick={() => (window.location.href = "#")}
          >
            Contact Instructor
          </button>
        </section>

        <section id="help-support" className="grid-item">
          <h2>Help & Support Page</h2>
          <p>FAQ section regarding grade reporting.</p>
          <button
            className="learn-more"
            onClick={() => (window.location.href = "#")}
          >
            FAQs
          </button>
        </section>
      </main>

      <footer>
        <p>&copy; 2023 Missing Grade Reporting System</p>
      </footer>
    </>
  );
};

export default Dashboard;
