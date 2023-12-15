// GradeReportPage.js

import React, { useState } from 'react';
import CourseTable from './CourseTable';

const GradeReportPage = ({ courses }) => {
  // State for filtering
  const [selectedSemester, setSelectedSemester] = useState('All');
  const [selectedYear, setSelectedYear] = useState('All');

  // Function to filter courses based on selected semester and year
  const filterCourses = () => {
    return courses.filter(course => {
      return (
        (selectedSemester === 'All' || course.semester === selectedSemester) &&
        (selectedYear === 'All' || course.year === selectedYear)
      );
    });
  };

  return (
    <div>
      <h1>Grade Report</h1>
      
      {/* Semester and Year filter options */}
      <div>
        <label htmlFor="semester">Select Semester:</label>
        <select
          id="semester"
          onChange={e => setSelectedSemester(e.target.value)}
          value={selectedSemester}
        >
          <option value="All">All</option>
          <option value="Fall">Fall</option>
          <option value="Spring">Spring</option>
          {/* Add more options as needed */}
        </select>

        <label htmlFor="year">Select Year:</label>
        <select
          id="year"
          onChange={e => setSelectedYear(e.target.value)}
          value={selectedYear}
        >
          <option value="All">All</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          {/* Add more options as needed */}
        </select>
      </div>

      {/* Display the filtered courses in a table */}
      <CourseTable courses={filterCourses()} />
    </div>
  );
};

export default GradeReportPage;
