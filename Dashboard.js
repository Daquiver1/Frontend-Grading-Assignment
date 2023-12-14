import React from 'react';

const Dashboard = () => {
  // Dummy data for grades
  const grades = [
    { course: 'DCIT 201', grade: 'A' },
    { course: 'DCIT 209', grade: 'B' },
    { course: 'DCIT 205', grade: 'C' },
    { course: 'CBAS 210', grade: 'A' },
  ];

  // Dummy data for missing grades
  const missingGrades = ['DCIT 207', 'DCIT 203']; 

  return (
    <div>
      <h2>Dashboard</h2>
      <div>
        <h3>Overview of Current Grades</h3>
        <ul>
          {grades.map((item, index) => (
            <li key={index}>
              <strong>{item.course}:</strong> {item.grade}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Alerts for Missing Grades</h3>
        {missingGrades.length === 0 ? (
          <p>No missing grades. Good job!</p>
        ) : (
          <ul>
            {missingGrades.map((course, index) => (
              <li key={index}>{course} is missing.</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
