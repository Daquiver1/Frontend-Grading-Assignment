import React from 'react';
import './DashBoard.css';

const DashBoard = () => {
  // Sample grades and missing grade alert
  const grades = [
    { course: 'Introduction to Computer Science A', grade: 'A' },
    { course: 'Mathematics', grade: 'B' },
    { course: 'History', grade: 'A-' },
    { course: 'Literature', grade: 'B+' },
    { course: 'Literature', grade: 'B+' },
    { course: 'Literature', grade: 'B+' },
    // Add more grade data as needed
  ];

  const missingGrades = [
    { course: 'Physics', instructor: 'Dr. Johnson' },
    { course: 'Chemistry', instructor: 'Prof. Williams' },
    { course: 'Chemistry', instructor: 'Prof. Williams' },
    // Add more missing grade data as needed
  ];

  const totalResults = grades.length;
  const totalMissingResults = missingGrades.length;

  return (
    <div className="Dashpage-container">
      <h1>DASHBOARD</h1>

      <div className="results-summary">
  <div className="results-box total-results">
    <p>Total Results: {totalResults}</p>
  </div>
  <div className="results-box total-missing-results">
    <p>Total Missing Results: {totalMissingResults}</p>
  </div>
</div>


      <h2>Recent Grades</h2>
      <div className="grades-list">
        {grades.map((grade, index) => (
          <div className="grade-card" key={index}>
            <p>{grade.course}</p>
            <p>Grade: {grade.grade}</p>
          </div>
        ))}
      </div>

      {totalMissingResults > 0 && (
        <div className="missing-grades">
          <h2>Alert: Missing Grades</h2>
          <ul>
            {missingGrades.map((missing, index) => (
              <li key={index}>
                Course: {missing.course} - Instructor: {missing.instructor}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DashBoard;
