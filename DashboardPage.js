import React from 'react';
import { grades } from '../data/grades';

const DashboardPage = () => {
  return (
    <div>
      <h2>Dashboard</h2>

      {/* Example: Displaying student's current grades */}
      <h3>Current Grades</h3>
      <ul>
        {grades.map((grade, index) => (
          <li key={index}>
            {grade.course}: {grade.grade}
          </li>
        ))}
      </ul>

      {/* Alerts or notifications for any missing grades */}
      {/* Include logic to display alerts based on missing grades */}
    </div>
  );
}

export default DashboardPage;

