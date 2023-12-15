

import React from 'react';
import { Link } from 'react-router-dom';

const AppDashboard = () => {

  
  // Mock data for current grades
  const currentGrades = {
    DCIT201: { grade: 'A', score: 95 },
    DCIT206: { grade: 'B', score: 88 },
    CBAS210: { grade: 'A', score: 92 },
    DCIT203: { grade: 'B', score: 89 },
    MATHS223: { grade: 'A', score: 94 },
    DCIT207: { grade: '-', score: 96 },
    // Add more subjects as needed
  };

  // Missing grade names
  const missingGrades = ['DCIT205- Multimedia and web design'];

  return (
    <div className="container">
      <h1>Dashboard</h1>
      <br />
      <div className="row g-2">
        {Object.entries(currentGrades).map(([subject, { grade, score }]) => (
          <div className="col-6" key={subject}>
            <div className="p-3 border bg-light">
              <div>
                <strong>{subject}</strong>
              </div>
              <div>
                <strong>Grade:</strong> {grade}
              </div>
              <div>
                <strong>Score:</strong> {score}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Danger callout for missing grades */}
      {missingGrades.length > 0 && (
        <div className="alert alert-danger mt-3">
          <strong>Missing Grades Alert:</strong> You have missing grades in the following subjects:
          <ul>
            {missingGrades.map((subject) => (
              <li key={subject}>{subject}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Navigation buttons */}
      <div className="mt-3">
        <Link to="/GradeReport" className="btn btn-primary me-2">
          Grade Report
        </Link>
        <Link to="/MissingGradeForm" className="btn btn-danger">
          Missing Grade Form
        </Link>
      </div>
    </div>
  );
};

export default AppDashboard;


