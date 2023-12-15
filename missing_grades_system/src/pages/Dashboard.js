// src/pages/DashboardPage.js
import React from 'react';
import '../styles/dashboard.css';
import Navbar from '../components/Navbar'


function DashboardPage() {
  // Simulated data for demonstration purposes
  const gradesData = [
    { course: 'DCIT 201', grade: 'A' },
    { course: 'DCIT 203', grade: 'B+' },
    { course: 'DCIT 205', grade: 'A' },
    { course: 'MATH 223', grade: 'A' },
    { course: 'STAT 223', grade: 'A' },
    { course: 'STAT 221', grade: 'A' },
    { course: 'CBASS 210', grade: 'A' },

    // Add more courses as needed
  ];

  const missingGradesData = [
    { course: 'DCIT 102,DCIT 104', status: 'Missing' },
    // Add more missing grades as needed
  ];

  return (
    <div className="dashboard-page">
      <Navbar></Navbar>
      <h1>Dashboard</h1>
      <section>
        <h2>Current Grades</h2>
        <ul>
          {gradesData.map((data, index) => (
            <li key={index}>
              <strong>{data.course}:</strong> {data.grade}
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Missing Grades</h2>
        {missingGradesData.length > 0 ? (
          <ul>
            {missingGradesData.map((data, index) => (
              <li key={index}>
                <strong>{data.course}:</strong> {data.status}
              </li>
            ))}
          </ul>
        ) : (
          <p>No missing grades at the moment.</p>
        )}
      </section>
    </div>
  );
}

export default DashboardPage;
