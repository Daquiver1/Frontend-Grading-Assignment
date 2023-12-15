import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles

const DashboardContent = () => {
  const [grades, setGrades] = useState([
    { course: 'Critical Thinking', grade: 'A' },
    { course: 'Hardware Fundamental', grade: 'B' },
    { course: 'Web development', grade: 'B' }
  ]);


  const [missingGrades, setMissingGrades] = useState([
{ course: 'Academic Writing II', status: 'Pending' },
    { course: 'Academic Writing II', status: 'Pending' },
    { course: 'Academic Writing II', status: 'Pending' },
    { course: 'Academic Writing II', status: 'Pending' },
    { course: 'Academic Writing II', status: 'Pending' },

  ]);

  useEffect(() => {
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <h2 className="mb-4">Dashboard</h2>

        <div className="mb-4">
          <h3>Your Current Grades</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Course</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              {grades.map((item, index) => (
                <tr key={index}>
                  <td>{item.course}</td>
                  <td>{item.grade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div>
          <h3>Missing Grade Alerts</h3>
          <ul className="list-group">
            {missingGrades.map((item, index) => (
              <li key={index} className="list-group-item">
                {item.course} - Status: {item.status}
              </li>
            ))}
          </ul>
        </div>
      </div>

      
    </div>
  );
};

export default DashboardContent;