import React, { useState } from 'react';

const GradeReport = () => {
  // Sample data for courses and grades
  const [grades, setGrades] = useState([
    { id: 1, course: 'Math', grade: 'A', semester: '1st sem 2022' },
    { id: 2, course: 'History', grade: 'B', semester: '1st sem 2022' },
    { id: 3, course: 'English', grade: 'C', semester: '2nd sem 2023' },
    // Add more courses as needed
  ]);

  const [selectedSemester, setSelectedSemester] = useState('All'); // Default to show all semesters

  const handleSemesterChange = (event) => {
    setSelectedSemester(event.target.value);
  };

  const filteredGrades = selectedSemester === 'All'
    ? grades
    : grades.filter((grade) => grade.semester === selectedSemester);

  return (
    <div>
      <h1>Grade Report</h1>
      
      <label>Select Semester:</label>
      <select value={selectedSemester} onChange={handleSemesterChange}>
        <option value="All">All</option>
        <option value="1st sem 2022">1st sem 2022</option>
        <option value="2nd sem 2023">2nd sem 2023</option>
        
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
  );
};

export default GradeReport;