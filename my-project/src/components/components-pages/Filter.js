import React from 'react';
import "../components-css/Filter.css"


const Filter = ({ selectedYear, selectedSemester, onSelectYear, onSelectSemester }) => {
  // Sample data for years and semesters
  const years = [ 2022, 2023];
  const semesters = [ 'First Semester', 'Second Semester'];

  return (
    <div className="filter">
      <label htmlFor="year">Select Year:</label>
      <select
        id="year"
        value={selectedYear}
        onChange={(e) => onSelectYear(e.target.value)}
      >
        <option value="">All Years</option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>

      <label htmlFor="semester">Select Semester:</label>
      <select
        id="semester"
        value={selectedSemester}
        onChange={(e) => onSelectSemester(e.target.value)}
      >
        <option value="">All Semesters</option>
        {semesters.map((semester) => (
          <option key={semester} value={semester}>
            {semester}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;