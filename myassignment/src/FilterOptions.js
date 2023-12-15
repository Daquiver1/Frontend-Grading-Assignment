import React from 'react';

const FilterOptions = ({ semesters, selectedSemester, onFilterChange }) => {
  return (
    <div className='filter'>
      <h2>Filter Options</h2>
      <label htmlFor="semesterSelect" className='perry'>Select Semester: </label>
      <select
        id="semesterSelect"
        value={selectedSemester}
        onChange={(e) => onFilterChange(e.target.value)}
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

export default FilterOptions;