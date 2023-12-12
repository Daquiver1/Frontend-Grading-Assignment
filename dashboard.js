import React, { useState, useEffect } from 'react';
import '../styles/dashboard.css';

const dashboard = () => {
  // Mock data for demonstration
  const [grades, setGrades] = useState([
    { subject: 'Math', grade: A },
    { subject: 'English', grade: A },
    // Add more subjects as needed
  ]);

  const [missingGrades, setMissingGrades] = useState([
    { subject: 'Science' },
    // Add more subjects as needed
  ]);

  useEffect(() => {
    // Fetch grades and missing grades data from your API or other data source
    // Update the state accordingly
    // For simplicity, we're using mock data here
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div className="dashboard-container">
      <div className="grades-overview">
        <h2>Grades Overview</h2>
        <ul>
          {grades.map((grade, index) => (
            <li key={index}>
              <span>{grade.subject}:</span> {grade.grade}
            </li>
          ))}
        </ul>
      </div>

      <div className="missing-grades-alerts">
        <h2>Missing Grades Alerts</h2>
        {missingGrades.length === 0 ? (
          <p>No missing grades</p>
        ) : (
          <ul>
            {missingGrades.map((missingGrade, index) => (
              <li key={index}>{missingGrade.subject} - Missing</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default dashboard;