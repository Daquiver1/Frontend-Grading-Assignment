// Dashboard.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Dashboard = () => {
  const [selectedSemester, setSelectedSemester] = useState('first'); // 'first' or 'second'

  // Placeholder data for the courses and instructors
  const coursesData = [
    { name: 'DCIT201', instructor: 'PNT' },
    { name: 'DCIT205', instructor: 'MS' },
    { name: 'DCIT203', instructor: 'AZ' },
    { name: 'DCIT209', instructor: 'BG' },
  ];

  const instructorsData = [
    { initials: 'PNT', fullName: 'Dr. Paul' },
    { initials: 'MS', fullName: 'Prof. M. Soli' },
    { initials: 'AZ', fullName: 'Prof Aziz Rahim' },
    { initials: 'BG', fullName: 'Prof. Benjamin Gameli' },
  ];

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="student-info">
         
          <p>Student ID: 11293722</p>
        </div>
        <nav>
          <ul>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/grade-report">Grade Report</Link></li>
            <li><Link to="/contact-instructor">Contact Instructor</Link></li>
            <li><Link to="/missing-grade-form">Missing Grade Form</Link></li>
            <li><Link to="/help-support">Help and Support</Link></li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <header>
          <h1>Dashboard</h1>
        </header>
        <div className="results-container">
          <div className="semester-toggle">
            <button onClick={() => setSelectedSemester('first')}>First Semester</button>
            <button onClick={() => setSelectedSemester('second')}>Second Semester</button>
          </div>
          <h2>{selectedSemester === 'first' ? 'First Semester Results' : 'Second Semester Results'}</h2>
          <table className="results-table">
            <thead>
              <tr>
                <th>Course</th>
                <th>Instructor</th>
              </tr>
            </thead>
            <tbody>
              {coursesData.map((course, index) => (
                <tr key={index}>
                  <td>{course.name}</td>
                  <td>{course.instructor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="instructors-table">
          <h3>Instructors</h3>
          <table>
            <thead>
              <tr>
                <th>Initials</th>
                <th>Full Name</th>
              </tr>
            </thead>
            <tbody>
              {instructorsData.map((instructor, index) => (
                <tr key={index}>
                  <td>{instructor.initials}</td>
                  <td>{instructor.fullName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
