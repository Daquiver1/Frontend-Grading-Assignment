// GradeReportPage.js

import React from 'react';
import './GradeReportPage.css';

const GradeReportPage = () => {
  return (
    <div className="grade-report-page">
      <header>
        <h1>Grade Report Page</h1>
      </header>

      <section className="grade-list">
        <h2>Course Grades</h2>
        <table>
          <thead>
            <tr>
              <th>Course</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mathematics 101</td>
              <td>A</td>
            </tr>
            <tr>
              <td>History 202</td>
              <td>B+</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </section>

      <section className="filter-options">
        <h2>Filter Options</h2>
        <label htmlFor="semester">Select Semester:</label>
        <select id="semester">
          <option value="fall">Fall</option>
          <option value="spring">Spring</option>
          <option value="summer">Summer</option>
        </select>
      </section>
    </div>
  );
};

export default GradeReportPage;
