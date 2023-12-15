
import React, { useState } from 'react';

const Report = () => {
  // Sample grade data
  const [grades, setGrades] = useState([
    { id: 1, subject: 'Math', grade: 'A', semester: 'Spring 2023' },
    { id: 2, subject: 'Science', grade: 'B+', semester: 'Fall 2022' },
    { id: 3, subject: 'History', grade: 'A-', semester: 'Spring 2022' },
    // Add more sample data as needed
  ]);

  const [selectedSemester, setSelectedSemester] = useState('All'); // Default to show all grades

  const filterGrades = (semester) => {
    // Filter grades based on the selected semester
    if (semester === 'All') {
      return grades;
    } else {
      return grades.filter((grade) => grade.semester === semester);
    }
  };

  const handleFilterChange = (event) => {
    // Update the selected semester when the filter changes
    setSelectedSemester(event.target.value);
  };

  return (
    <div>
      <h1>Grade Report</h1>
      <div>
        <label htmlFor="semesterFilter">Filter by Semester:</label>
        <select
          id="semesterFilter"
          onChange={handleFilterChange}
          value={selectedSemester}
        >
          <option value="All">All</option>
          <option value="Spring 2023">Spring 2023</option>
          <option value="Fall 2022">Fall 2022</option>
          {/* Add more semester options as needed */}
        </select>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Grade</th>
            <th>Semester</th>
          </tr>
        </thead>
        <tbody>
          {filterGrades(selectedSemester).map((grade) => (
            <tr key={grade.id}>
              <td>{grade.subject}</td>
              <td>{grade.grade}</td>
              <td>{grade.semester}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Report;
