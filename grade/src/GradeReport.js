import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const GradeReport = () => {
  // Sample data representing detailed grade report
  const [gradeReport, setGradeReport] = useState([
    { course: 'Math', grade: 'A', semester: 'Fall 2022' },
    { course: 'Science', grade: 'B', semester: 'Fall 2022' },
    { course: 'English', grade: 'A', semester: 'Fall 2022' },
    { course: 'History', grade: 'B+', semester: 'Spring 2023' },
    // Add more courses and grades as needed
  ]);

  // State for the selected filter
  const [selectedFilter, setSelectedFilter] = useState('All');

  // Function to handle filter change
  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
  };

  // Filter the grades based on the selected option
  const filteredGrades =
    selectedFilter === 'All'
      ? gradeReport
      : gradeReport.filter((grade) => grade.semester === selectedFilter);

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Grade Report</h1>

      {/* Filter Dropdown */}
      <div className="mb-3">
        <label htmlFor="filter" className="form-label">
          Filter by Semester:
        </label>
        <select
          className="form-select"
          id="filter"
          value={selectedFilter}
          onChange={handleFilterChange}
        >
          <option value="All">All</option>
          <option value="Fall 2022">Fall 2022</option>
          <option value="Spring 2023">Spring 2023</option>
          {/* Add more options based on your data */}
        </select>
      </div>

      {/* Grade Table */}
      <table className="table">
        <thead>
          <tr>
            <th>Course</th>
            <th>Grade</th>
            <th>Semester</th>
          </tr>
        </thead>
        <tbody>
          {filteredGrades.map((grade, index) => (
            <tr key={index}>
              <td>{grade.course}</td>
              <td>{grade.grade}</td>
              <td>{grade.semester}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GradeReport;
