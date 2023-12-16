// GradesReport.jsx

import React, { useState } from 'react';
import NavBar from './Navbar/NavBar'; // Adjust the path based on your project structure
import UserInfo from './UserInfo/UserInfo'; // Adjust the path based on your project structure
import Footer from './Footer/Footer'; // Adjust the path based on your project structure
import './GradesReport.css'; // Import your CSS file for styling

const GradesReport = () => {
  const [grades, setGrades] = useState([
    { subject: 'Math', grade: 'A' },
    { subject: 'Science', grade: 'B' },
    { subject: 'English', grade: 'A-' },
    // Add more subjects and grades as needed
  ]);

  return (
    <div className="grades-report-page">
      <NavBar />
      <UserInfo />

      <div className="grades-container">
        <h2>Grades Report</h2>
        <table>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {grades.map((grade, index) => (
              <tr key={index}>
                <td>{grade.subject}</td>
                <td>{grade.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Footer />
    </div>
  );
};

export default GradesReport;
