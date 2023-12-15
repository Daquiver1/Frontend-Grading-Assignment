import React from "react";
import "./ReportMissingGrade.css"; // Import the corresponding CSS file

const ReportMissingGrade = () => {
  return (
    <>
      <header className="header">
        <div className="dept-logo">
          <a href="index.html">
            <img
              src="./public/img/CS_logo.png"
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

      <main className="report-missing-grade-content">
        <section id="missing-grade-form" className="grid-item">
          <h2>Report Missing Grade</h2>
          <p>Fill out the form below to report a missing grade:</p>
          <form>
            <label htmlFor="course-name">Course Name:</label>
            <input type="text" id="course-name" name="course-name" required />
            <br />
            <br />
            <label htmlFor="instructor-name">Instructor Name:</label>
            <input
              type="text"
              id="instructor-name"
              name="instructor-name"
              required
            />
            <br />
            <br />
            <label htmlFor="expected-grade">Expected Grade:</label>
            <input
              type="text"
              id="expected-grade"
              name="expected-grade"
              required
            />
            <br />
            <br />
            <label htmlFor="explanation">Explanation:</label>
            <br />
            <textarea id="explanation" name="explanation" required></textarea>
            <br />
            <br />
            <button className="learn-more" type="submit">
              Report Missing Grade
            </button>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2023 Missing Grade Reporting System</p>
      </footer>
    </>
  );
};

export default ReportMissingGrade;
