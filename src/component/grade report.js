import React, { useState } from 'react';
import GradeList from './gradelist';
import './grade.css'

const GradeReport = () => {
  const [selectedSemester, setSelectedSemester] = useState('All');
  const [selectedYear, setSelectedYear] = useState('All');

  // Mock data of courses and grades
  const courses = [
    { name: 'Course 1', grade: 'A', semester: 'First Semester', year: '100' },
    { name: 'Course 2', grade: 'B', semester: 'Second Semester', year: '100' },
    // More course objects
  ];

  // Filter courses by selected semester and year
  const filteredCourses = courses.filter(course => {
    return (
      (selectedSemester === 'All' || course.semester === selectedSemester) &&
      (selectedYear === 'All' || course.year === selectedYear)
    );
  });

  return (
    <div>
      <h1>Grade Report</h1>
      <div>
        <label htmlFor="semesterFilter">Select Semester:</label>
        <select
          id="semesterFilter"
          value={selectedSemester}
          onChange={(e) => setSelectedSemester(e.target.value)}
        >
          <option value="All">All Semesters</option>
          <option value="First Semester">First Semester</option>
          <option value="Second Semester">Second Semester</option>
          {/* Add more options for different semesters */}
        </select>
      </div>
      <div>
        <label htmlFor="yearFilter">Select Level:</label>
        <select
          id="yearFilter"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          <option value="All">Level</option>
          <option value="100">100</option>
          <option value="200">200</option>
          <option value="300">300</option>
          <option value="400">400</option>
          {/* Add more options for different years */}
        </select>
      </div>
      <GradeList courses={filteredCourses} />
    </div>
  );
};

export default GradeReport;
