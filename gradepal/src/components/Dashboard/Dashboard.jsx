import React from "react";
import "./dashboard.css"; // Import the CSS file

const Dashboard = () => {
  const gradeData = [
    { course: "DCIT201 PROGRAMMING I", grade: "A" },
    { course: "DCIT203 DIGITAL AND LOGIC SYSTEM DESIGN ", grade: "A"  },
    { course: "DCIT201 PROGRAMMING I", grade: "C+"  },
    { course: "DCIT205 MULTI MEDIA AND WEB DESIGN MAIN CAMPUS", grade: "A"  },
    { course: "DCIT207 COMPUTER ORGANIZATION & ARCHITECTURE ", grade: "B+" },
    { course: "MATH223 CALCULUS II", grade: "A" },
  ];

  const alertsData = [
    {
      type: "Missing Grade",
      course: "DCIT207 COMPUTER ORGANIZATION & ARCHITECTURE",
      message: "Reported 3 days ago",
    },
    { 
      type: "Low Grade", 
      course: "DCIT201 PROGRAMMING I", 
      message: "Current grade is C+" 
    },
  ];

  return (
    <div className="dashboard-container">
      <h2 className="heading">Dashboard</h2>
      <p className="overview">Overview of your current grades and alerts.</p>

      {/* Grades Section */}
      <div className="grades-section">
        <h3>Your Current Grades</h3>
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
