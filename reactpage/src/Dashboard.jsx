import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const gradesData = {
    'MS Productivity Tools': '-',
    'Math. for IT professionals': '-',
    'Intro to Stat. & Prob. ': '-',
    'Programming': '-',
    'Academic writing': '-',
    'Calculus': '-',
    'Software Engineering': '-',
  };

  const studentData = {
    name: 'Terrence Arthur',
    grades: {
      'Introduction to African Studies': 'A',
      'Mobile App Development': 'B',
      'Software Engineering': '-',
      'Systems Administration': 'C+',
    },
  };

  // State for managing notifications
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <div className='dash'>
      <div className="dashboard-container">
        <h2 style={headerStyle}>Dashboard - {studentData.name}</h2>
        <h1>&nbsp;</h1>
        <section>
          <h3>Overview of Current Grades</h3>
          <h1>&nbsp;</h1>
          <ul style={gradesListStyle}>
            {Object.entries(studentData.grades).map(([subject, grade]) => (
              <li key={subject}>
                {subject}: {grade !== null ? grade : 'N/A'}
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Notifications Button */}
      <div className="dashboard-button-contents">
        <button onClick={() => setShowNotifications(true)} className="dashboard-button" height="2px">
          Notifications
        </button>

        {/* Notifications Menu */}
        {showNotifications && (
          <div>
            <h3 className="dashboard-button-title">Notifications</h3>
            <ul className="dashboard-button-body">
              {Object.entries(gradesData)
                .filter(([course, grade]) => grade === '-')
                .map(([course]) => (
                  <li key={course}>Missing: {course}</li>
                ))}
            </ul>
            <button onClick={() => setShowNotifications(false)} className="dashboard-button2">
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// Styles
const headerStyle = {
  color: '#001f3f',
  fontFamily: 'calibri',
};

const gradesListStyle = {
  listStyle: 'none',
  padding: 0,
};

export default Dashboard;
