import React, { useState } from 'react';
import './GradeReport.css';

const coursesData = [
  { id: 1, name: 'Math', grade: 'A', semester: 'Spring 2022' },
  { id: 2, name: 'History', grade: 'B', semester: 'Spring 2022' },
  { id: 3, name: 'English', grade: 'A-', semester: 'Fall 2022' },
  
];

const GradeReport = () => {
  const [selectedSemester, setSelectedSemester] = useState('All');

  const handleSemesterChange = (e) => {
    setSelectedSemester(e.target.value);
  };

  const filteredCourses = selectedSemester === 'All'
    ? coursesData
    : coursesData.filter(course => course.semester === selectedSemester);

  return (
    <div className="App">
      <h1>Grade Report</h1>
      <label htmlFor="semesterFilter">Filter by Semester: </label>
      <select id="semesterFilter" onChange={handleSemesterChange} value={selectedSemester}>
        <option value="All">All</option>
        <option value="Spring 2022">Spring 2022</option>
        <option value="Fall 2022">Fall 2022</option>
        
      </select>

      <table>
        <thead>
          <tr>
            <th>Course</th>
            <th>Grade</th>
            <th>Semester</th>
          </tr>
        </thead>
        <tbody>
          {filteredCourses.map(course => (
            <tr key={course.id}>
              <td>{course.name}</td>
              <td>{course.grade}</td>
              <td>{course.semester}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GradeReport;
