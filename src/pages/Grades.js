import React, { useState } from 'react';
import '../styles/Grades.css';
const GradeReportPage = () => {
  const [selectedSemester, setSelectedSemester] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  
  // Sample data for six courses and grades
  const gradeData = [
    { id: 1, course: 'DCIT101', grade: 'A', semester: 'First Semester', year: 2023 },
    { id: 2, course: 'DCIT102', grade: 'B', semester: 'First Semester', year: 2023 },
    { id: 3, course: 'DCIT103', grade: 'A-', semester: 'First Semester', year: 2023 },
    { id: 4, course: 'DCIT105', grade: 'B+', semester: 'First Semester', year: 2023 },
    { id: 5, course: 'DCIT106', grade: 'D', semester: 'First Semester', year: 2023 },
    { id: 6, course: 'DCIT107', grade: 'C', semester: 'First Semester', year: 2023 },
    { id: 7, course: 'DCIT110', grade: 'C', semester: 'Second Semester', year: 2022 },
    { id: 8, course: 'DCIT120', grade: 'C', semester: 'Second Semester', year: 2022 },
    { id: 9, course: 'DCIT130', grade: 'C', semester: 'Second Semester', year: 2022 },
    { id: 10, course: 'DCIT140', grade: 'A', semester: 'Second Semester', year: 2022 },
    { id: 11, course: 'DCIT150', grade: 'B', semester: 'Second Semester', year: 2022 },
    { id: 12, course: 'DCIT160', grade: 'D', semester: 'Second Semester', year: 2022 },
    // Add more courses as needed
  ];

  // Filter courses based on selected semester and year
  const filteredCourses = gradeData.filter(course => 
    (!selectedSemester || course.semester === selectedSemester) &&
    (!selectedYear || course.year === selectedYear)
  );

  return (
    <div>
      <h1>Grade Report Page</h1>
      
      {/* Semester and Year filter */}
      <div>
        <label>Semester:</label>
        <select
          value={selectedSemester}
          onChange={(e) => setSelectedSemester(e.target.value)}
        >
          <option value="">All</option>
          <option value="First Semester">First Semester</option>
          <option value="Second Semester">Second Semester</option>
          {/* Add more semesters as needed */}
        </select>
        
        <label>Year:</label>
        <input
          type="number"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          placeholder="All"
        />
      </div>
      
      {/* Display six courses and grades */}
      <table>
        <thead>
          <tr>
            <th>Course</th>
            <th>Grade</th>
            <th>Semester</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {filteredCourses.map(course => (
            <tr key={course.id}>
              <td>{course.course}</td>
              <td>{course.grade}</td>
              <td>{course.semester}</td>
              <td>{course.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GradeReportPage;