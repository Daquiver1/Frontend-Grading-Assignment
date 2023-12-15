// MissingGradesAlert.js
import React from 'react';

const MissingGradesAlert = () => {
  // Simulated data for missing grades
  const missingGradesData = [
    { course: 'Chemistry', alert: 'Missing grade for assignment' },
    { course: 'English', alert: 'Missing final exam grade' },
    // Add more missing grades as needed
  ];

  return (
    <div className="missing-grades-alert">
      <h2>Missing Grades Alerts</h2>
      <ul>
        {missingGradesData.map((data, index) => (
          <li key={index}>
            <span className="course-name">{data.course}</span>
            <span className="alert">{data.alert}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MissingGradesAlert;
