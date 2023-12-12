import React, { useState } from 'react';
import '../styles/grade.report.css'; 

const GradeReportPage = ({ courses }) => {
  const [selectedYear, setSelectedYear] = useState('');

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  return (
    <div className="grade-report-page">
      <h1>Grade Report</h1>

      <div className="filter-container">
        <label htmlFor="yearFilter">Filter by Year:</label>
        <select
          id="yearFilter"
          value={selectedYear}
          onChange={handleYearChange}
        >
          <option value="">All</option>

        </select>
      </div>

      <div className="courses-container">
        {courses.map((course) => (
          <div key={course.id} className="course">
            <h2>{course.name}</h2>
            <p>Grade: {course.grade}</p>
            {/* Add more details like course code, instructor, etc. if needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GradeReportPage;
