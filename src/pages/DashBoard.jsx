import React from 'react';
import './DashBoard.css';

const DashBoard = () => {
  // Sample grades and missing grade alert
  const grades = [
    { course: 'Introduction to Computer Science A', grade: 'A' },
    { course: 'Programming 1', grade: 'B' },
    { course: 'Calculus 2', grade: 'A-' },
    { course: 'CBAS 210', grade: 'B+' },
    { course: 'COMPUTER ORGANIZATION & ARCHITECTURE ', grade: 'B+' },
    { course: 'Digital and Logic System Design', grade: 'B+' },
    // Add more grade data as needed
  ];

  const missingGrades = [
    { course: 'CALCULUS 1', instructor: 'Dr. Johnson' },
    { course: 'ACADEMIC WRITING', instructor: 'Prof. Williams' },
    { course: 'COMPUTER HARDWARE FUNDAMENTALS', instructor: 'Prof. Williams' },
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
