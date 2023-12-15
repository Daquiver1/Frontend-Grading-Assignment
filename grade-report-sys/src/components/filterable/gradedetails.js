import React, { useState } from 'react';
import data from './data';
import './gradedetails.css';

const GradeReport = () => {
  const [filter, setFilter] = useState({ year: '', semester: '' });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter((prevFilter) => ({ ...prevFilter, [name]: value }));
  };

  const filteredData = data.filter((item) => {
    return Object.keys(filter).every((key) => {
      if (filter[key]) {
        return String(item[key]).toLowerCase().includes(filter[key].toLowerCase());
      }
      return true;
    });
  });

  return (
    <div>
      <div className="filters">
        <label className='label'>
          Filter by Year:
          <input
            className='input'
            type="text"
            name="year"
            placeholder='Egs: 2023'
            value={filter.year}
            onChange={handleFilterChange}
          />
        </label>
        <label className='label'>
          Filter by Semester:
          <input
            className='input'
            type="text"
            name="semester"
            placeholder='Egs:first'
            value={filter.semester}
            onChange={handleFilterChange}
          />
        </label>
      </div>
      <table className='table'>
        <thead className='thead'>
          <tr className='tr'>
            <th className='th'>Course</th>
            <th className='th'>Year</th>
            <th className='th'>Semester</th>
            <th className='th'>Grade</th>
          </tr>
        </thead>
        <tbody className='tbody'>
          {filteredData.map((item) => (
            <tr key={item.id} className='tr'>
              <td className='td'>{item.course}</td>
              <td className='td'>{item.year}</td>
              <td className='td'>{item.semester}</td>
              <td className='td'>{item.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GradeReport;
