import React, { useState, useEffect } from 'react';
import "../src/dashboard.css";
import Header from '../ms-header';
import Footer from '../ms-footer';

const Dashboard = () => {
  const [grades, setGrades] = useState([]);
  const [missingGrades, setMissingGrades] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const fetchGrades = () => {
      const fakeGrades = [
        { subject: 'DCIT201', grade: 'A', assignmentType: 'Homework', missedAssignment: false },
        { subject: '203', grade: 'A', assignmentType: 'Quiz', missedAssignment: true },
        { subject: '207', grade: 'A', assignmentType: 'Project', missedAssignment: false },
        { subject: 'MATH223', grade: 'A', assignmentType: 'Homework', missedAssignment: false },
      ];

      setGrades(fakeGrades);
    };

    const fetchMissingGrades = () => {
      const fakeMissingGrades = [
        { subject: 'DCIT205', message: 'Missing assignment' },
      ];

      setMissingGrades(fakeMissingGrades);

      if (showAlert && fakeMissingGrades.length > 0) {
        window.alert('Alert: You have missing grades! Check the dashboard for details.');
      }
    };

    fetchGrades();
    fetchMissingGrades();
  }, [showAlert]);

  return (
    <div>
      <Header />
      <div className="dashboard-container">

      <div className="dashboard-content">

        <h2 className='dashboard-title'>Dashboard</h2>

        <button className="alert-toggle" onClick={() => setShowAlert(!showAlert)}>
          {showAlert ? 'Disable Alerts' : 'Enable Alerts'}
        </button>

        <div className="grades-section">
          <h3>Current Grades</h3>
          <table className="grades-table">
            <thead>
              <tr>
                <th>Subject</th>
                <th>Grade</th>
                <th>Assignment Type</th>
                <th>Missed Assignment</th>
              </tr>
            </thead>
            <tbody>
              {grades.map((grade, index) => (
                <tr key={index}>
                  <td>{grade.subject}</td>
                  <td>{grade.grade}</td>
                  <td>{grade.assignmentType}</td>
                  <td>{grade.missedAssignment ? 'Yes' : 'No'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="missing-grades-section">
          <h3>Missing Grades</h3>
          <ul>
            {missingGrades.map((missingGrade, index) => (
              <li key={index}>
                {missingGrade.subject}: {missingGrade.message}
              </li>
            ))}
          </ul>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;


