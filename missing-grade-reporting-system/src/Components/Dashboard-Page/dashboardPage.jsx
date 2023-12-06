// components/Dashboard-Page/Dashboard.jsx

import React, { useState, useEffect } from 'react';
import './dashboard.css'; // Import your styles here

const Dashboard = () => {
  const [grades, setGrades] = useState([]); // State to hold student grades data

  // Simulated data (you can replace this with actual data)
  const mockGradesData = [
    { course: 'Math', grade: 'A', semester: 'Fall 2023' },
    { course: 'History', grade: 'B', semester: 'Fall 2023' },
    // Add more data as needed
  ];

  useEffect(() => {
    // Fetch grades data or set it from a global state (simulated for now)
    setGrades(mockGradesData);

    // Set document title to "Dashboard"
    document.title = 'Dashboard';
  }, []);

  return (
    <div className="dashboard-container">
      <h2>Dashboard Page</h2>
      {/* Render your grades data here */}
      <div>
        <h3>Your Grades</h3>
        <ul>
          {grades.map((grade, index) => (
            <li key={index}>
              {grade.course} - {grade.grade} ({grade.semester})
            </li>
          ))}
        </ul>
      </div>
      {/* Add more components for filtering and other features */}
    </div>
  );
};

export default Dashboard;
