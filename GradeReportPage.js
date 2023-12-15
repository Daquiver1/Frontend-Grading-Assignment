import React from 'react';
import { grades } from '../data/grades';

const GradeReportPage = () => {
  return (
    <div>
      <h2>Grade Report</h2>
      <p>Detailed view of all courses and respective grades</p>

      {/* Example: Displaying detailed view of all courses and respective grades */}
      <table>
        <thead>
          <tr>
            <th>Course</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {grades.map((grade, index) => (
            <tr key={index}>
              <td>{grade.course}</td>
              <td>{grade.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Option to filter by semester/academic year */}
      {/* Include form elements with filtering options */}
    </div>
  );
}

export default GradeReportPage;
