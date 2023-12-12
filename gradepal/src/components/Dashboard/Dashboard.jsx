// src/components/dashboard/Dashboard.js
import React from "react";
import "./dashboard.css"; // Import the CSS file

const Dashboard = () => {
  // Sample data (replace with actual data from your application)
  // const gradesData = [
  //   { course: "Mathematics", grade: "A" },
  //   { course: "History", grade: "B" },
  //   { course: "Science", grade: "A-" },
  // ];
  const gradeData = [
    { course: "Mathematics", grade: "A" },
    { course: "Science", grade: "A-" },
    { course: "English", grade: "C-" },
    { course: "Physics", grade: "A-" },
    { course: "Chemistry", grade: "B+" },
    { course: "Biology", grade: "A-" },
  ];

  const alertsData = [
    {
      type: "Missing Grade",
      course: "English",
      message: "Reported 3 days ago",
    },
    { 
      type: "Low Grade", 
      course: "Physics", 
      message: "Current grade is C" 
    },
  ];

  return (
    <div className="dashboard-container">
      <h2 className="heading">Dashboard</h2>
      <p className="overview">Overview of your current grades and alerts.</p>

      {/* Grades Section */}
      <div className="grades-section">
        <h3>Your Current Grades</h3>
        {/* <ul>
          {gradesData.map((grade, index) => (
            <li key={index}>
              <strong>{grade.course}:</strong> {grade.grade}
            </li>
          ))}
        </ul> */}
        <div className="grade-section">
        <table>
          <thead>
            <tr>
              <th>Course</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {gradeData.map((entry, index) => (
              <tr key={index}>
                <td>{entry.course}</td>
                <td>{entry.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        
      </div>

      {/* Alerts Section */}
      <div className="alerts-section">
        <h3>Alerts and Notifications</h3>
        <ul>
          {alertsData.map((alert, index) => (
            <li key={index}>
              <strong>{alert.type}:</strong> {alert.course} - {alert.message}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
