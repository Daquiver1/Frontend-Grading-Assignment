import React from 'react';
import './Dashboard.css';
import '../components/Sidebar.css';

const Dashboard = () => {
  return (
        <div className="dashboard-container">
          <h2 className="dashboard-title">Dashboard</h2>

          <div className="dashboard-content">
            <div className="grade-overview">
              <h3>Grade Overview</h3>
              <p>Your current grades are displayed here.</p>
              {/* Placeholder content, you can replace this with actual data */}
              <table>
                <thead>
                  <tr>
                    <th>Course Code</th>
                    <th>Course Name</th>
                    <th>Credit Hours</th>
                    <th>Grade</th>
                    <th>Grade Point</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>DCIT102</td>
                    <td>Computer Hardware Fundamentals and circuits</td>
                    <td>3</td>
                    <td>B+</td>
                    <td>10.5</td>
                  </tr>
                  <tr>
                    <td>ECON102</td>
                    <td>Introduction to Economics</td>
                    <td>3</td>
                    <td>B+</td>
                    <td>10.5</td>
                  </tr>

                  <tr>
                    <td>MATH122</td>
                    <td>Calculus I</td>
                    <td>3</td>
                    <td>B+</td>
                    <td>10.5</td>
                  </tr>

                  <tr>
                    <td>UGRC110</td>
                    <td>Academic Writing I</td>
                    <td>3</td>
                    <td>N/A</td>
                    <td>N/A</td>
                  </tr>

                  <tr>
                    <td>STAT112</td>
                    <td>Introduction to Statistics and Probability II</td>
                    <td>3</td>
                    <td>A</td>
                    <td>12</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Add margin to create a gap */}
          <div className="missing-grades-alerts" style={{ marginTop: '20px' }}>
            <h3>Missing Grades Alerts</h3>
            <p>Any missing grades or alerts will appear here.</p>

            <div className="alert-item">
              <span className="alert-type">Missing Grade</span>
              <span className="alert-details">UGRC110: Academic Writing I</span>
            </div>
          </div>
        </div>
  
  );
};

export default Dashboard;