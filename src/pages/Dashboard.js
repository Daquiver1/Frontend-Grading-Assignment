import React, { useState, useEffect } from 'react';
import './App.css';

const coursesData = [
  { id: 1, name: 'Math', grade: 'A', semester: 'Spring 2022' },
  { id: 2, name: 'History', grade: 'B', semester: 'Spring 2022' },
  { id: 3, name: 'English', grade: 'A-', semester: 'Fall 2022' },
  
];

const Dashboard = () => {
  const [missingGrades, setMissingGrades] = useState([]);

  useEffect(() => {
    const missing = coursesData.filter(course => !course.grade);
    setMissingGrades(missing);
  }, []);

  return (
    <div className="Dashboard">
      <h1>Student Dashboard</h1>

      <div className="grades-overview">
        <h2>Grades Overview</h2>
        <table>
          <thead>
            <tr>
              <th>Course</th>
              <th>Grade</th>
              <th>Semester</th>
            </tr>
          </thead>
          <tbody>
            {coursesData.map(course => (
              <tr key={course.id}>
                <td>{course.name}</td>
                <td>{course.grade || 'N/A'}</td>
                <td>{course.semester}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {missingGrades.length > 0 && (
        <div className="missing-grades">
          <h2>Alerts</h2>
          <p>Missing Grades:</p>
          <ul>
            {missingGrades.map(course => (
              <li key={course.id}>{course.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
