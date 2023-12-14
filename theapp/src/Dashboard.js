import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation';
import Footer from './Footer';

const Dashboard = () => {
  // Mock data for student's grades and missing grades
  const studentGrades = [
    { subject: 'Math', grade: 'A' },
    { subject: 'Science', grade: 'B+' },
    { subject: 'History', grade: 'A-' },
    // Add more subjects and grades as needed
  ];

  const missingGrades = [
    { subject: 'English', message: 'Grade not yet recorded' },
    { subject: 'Physics', message: 'Grade missing for assignment 3' },
    // Add more missing grades with corresponding messages
  ];

  return (
    <div>
        <Navigation />
       
    <div className="container mt-4">
      <h1>Dashboard</h1>

      <div className="row mt-4">
        <div className="col-md-6">
          <h2>Current Grades</h2>
          <ul className="list-group">
            {studentGrades.map((grade, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                {grade.subject}
                <span className="badge bg-primary rounded-pill">{grade.grade}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-md-6">
          <h2>Missing Grades</h2>
          <ul className="list-group">
            {missingGrades.map((missing, index) => (
              <li key={index} className="list-group-item">
                <strong>{missing.subject}</strong>: {missing.message}
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
