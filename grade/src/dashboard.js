import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => {
  // Sample data representing student's grades
  const [grades, setGrades] = useState([
    { course: 'Math', grade: 'A' },
    { course: 'Science', grade: 'B' },
    // Add more courses and grades as needed
  ]);

  // Sample data representing missing grades
  const [missingGrades, setMissingGrades] = useState([
    { course: 'English' },
    // Add more missing grades as needed
  ]);

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Student Dashboard</h1>

      <div className="row">
        <div className="col-md-6">
          <h2>Your Grades</h2>
          <ul className="list-group">
            {grades.map((grade, index) => (
              <li key={index} className="list-group-item">
                {grade.course}: {grade.grade}
              </li>
            ))}
          </ul>
        </div>

        <div className="col-md-6">
          <h2>Missing Grades</h2>
          {missingGrades.length > 0 ? (
            <ul className="list-group">
              {missingGrades.map((missingGrade, index) => (
                <li key={index} className="list-group-item">
                  {missingGrade.course}: Missing
                </li>
              ))}
            </ul>
          ) : (
            <p>No missing grades. Good job!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
