// GradeReport.js

import React from 'react';
import './GradeReport.css'; 

const GradeReport = () => {
  return (
    <div>
      <header>
        <h2>Your Awesome Grade Report</h2>
      </header>
      <nav>
        <a href="/">Home</a>
        <a href="/login">Login</a>
        <a href="/dashboard">Dashboard</a>
        <a href="/grade-report">Grade Report</a>
        <a href="/missing-grade-form">Report Missing Grade</a>
        <a href="/instructor-contact">Instructor Contact</a>
        <a href="/help-support">Help & Support</a>
      </nav>
      <main>
        <section>
          <p>
            Dive into the details of your academic performance with the Grade Report page. This page offers a comprehensive view of your grades across all courses, allowing you to reflect on your progress and identify areas for improvement. Your grades are neatly organized by semester, providing a chronological snapshot of your academic journey.
          </p>
          <p className="details">
            Display Detailed View and Filtering Options:
          </p>
          <p>
            Uncover the specifics of each course, including grades, credits, and instructor details. Use the filtering options to streamline your view by semester or academic year, allowing you to focus on specific periods or track your improvement over time.
          </p>
          {/* Added Table with Subjects and Grades */}
          <table>
            <thead>
              <tr>
                <th>Subject</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>MATH 223</td>
                <td>B</td>
              </tr>
              <tr>
                <td>DCIT 203</td>
                <td>A</td>
              </tr>
              <tr>
                <td>DCIT 204</td>
                <td>A</td>
              </tr>
              <tr>
                <td>DCIT 205</td>
                <td>A</td>
              </tr>
            </tbody>
          </table>
          {/* End of Table */}
        </section>
      </main>
      <footer>
        <p>&copy; 2023 GradeTracker - Your Academic Companion</p>
      </footer>
    </div>
  );
};

export default GradeReport;



