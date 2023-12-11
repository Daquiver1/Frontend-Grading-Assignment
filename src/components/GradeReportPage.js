

import React, { useState } from 'react';
import './GradeReportPage.css'; // Import the CSS file for styling

const GradeReportPage = () => {
  const [grades, setGrades] = useState([
    { id: 1, course: 'Mathematics 123', grade: 'A', semester: 'Fall 2022' },
    { id: 2, course: 'English Literature', grade: 'B+', semester: 'Fall 2022' },
    { id: 3, course: 'Computer Science 101', grade: 'A-', semester: 'Spring 2023' },
    { id: 4, course: 'Logical circuits', grade: 'A', semester: 'Spring 2023' },
    { id: 5, course: 'Statistics and Probability', grade: 'A', semester: 'Spring 2023' },
  ]);

  const [selectedSemester, setSelectedSemester] = useState('All');

  const filterGrades = (semester) => {
    setSelectedSemester(semester);
  };

  const filteredGrades = selectedSemester === 'All'
    ? grades
    : grades.filter(grade => grade.semester === selectedSemester);

  return (
    <div className="grade-report-container">
      <h2>Students Grade Report</h2>

      <div className="filter-section">
        <h3>Filter by Semester:</h3>
        <button onClick={() => filterGrades('All')}>All</button>
        <button onClick={() => filterGrades('Fall 2022')}>Fall 2022</button>
        <button onClick={() => filterGrades('Spring 2023')}>Spring 2023</button>
        {/* Add more semester buttons as needed */}
      </div>

      <div className="grade-list">
        <h3>Course Grades:</h3>
        <table>
          <thead>
            <tr>
              <th>Course</th>
              <th>Grade</th>
              <th>Semester</th>
            </tr>
          </thead>
          <tbody>
            {filteredGrades.map((grade) => (
              <tr key={grade.id}>
                <td>{grade.course}</td>
                <td>{grade.grade}</td>
                <td>{grade.semester}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GradeReportPage;
