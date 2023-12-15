import React from 'react';
import '../components/styles/GradeReport.css';

const GradeReport = () => {
  return (
    <div className="grade-report-container">
      <h2>Grade Report</h2>
      <div className="filter-options">
        {/* Replace with actual filter options */}
        <button>All</button>
        <button>Passed</button>
        <button>Failed</button>
      </div>
      <div className="courses-container">
        {/* Replace with actual data */}
        <div className="course">
          <h3>Math</h3>
          <p>Grade: A</p>
        </div>
        <div className="course">
          <h3>English</h3>
          <p>Grade: B+</p>
        </div>
        <div className="course">
          <h3>Science</h3>
          <p>Grade: A-</p>
        </div>
      </div>
    </div>
  );
};

export default GradeReport;