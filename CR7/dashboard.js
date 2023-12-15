import React from 'react';

const DashboardPage = () => {

  const currentGrades = [
    { course: 'Mathematics', grade: 'A' },
    { course: 'History', grade: 'B+' },
    { course: 'Science', grade: 'A-' },
  ];

  const missingGradesAlerts = [
    { course: 'English', alert: 'Missing Grade' },
    
  ];

  return (
    <div>
      <h2>Dashboard</h2>

      
      <section>
        <h3>Current Grades</h3>
        <ul>
          {currentGrades.map((item, index) => (
            <li key={index}>{`${item.course}: ${item.grade}`}</li>
          ))}
        </ul>
      </section>

      
      <section>
        <h3>Missing Grades Alerts</h3>
        <ul>
          {missingGradesAlerts.map((item, index) => (
            <li key={index}>{`${item.course}: ${item.alert}`}</li>
          ))}
        </ul>
      </section>

      
      <nav>
        <ul>
        <li><a href="dashboard">landingpage.js</a></li>
        <li><a href="login">loginpage.js</a></li>
        <li><a href="dashboard">dashboard.js</a></li>
        <li><a href="grade report">grade.js</a></li>
        <li><a href="missing grade form">missinggrade.js</a></li>
        <li><a href="help">help.js</a></li>
        <li><a href="instructor page">instructor.js</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default DashboardPage;