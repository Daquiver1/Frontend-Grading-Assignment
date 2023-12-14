import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import './style.css'
import Footer from './footer';


const GradeReportPage = () => {
  const [allGrades, setAllGrades] = useState([]);
  const [filteredGrades, setFilteredGrades] = useState([]);
  const [selectedYear, setSelectedYear] = useState(''); 

  useEffect(() => {
    const fetchAllGrades = () => {
      setTimeout(() => {
        const fetchedGrades = [
          { course: 'MATH121', grade: 'A', year: '2022' },
          { course: 'UGRC150', grade: 'A', year: '2022' },
          { course: 'DCIT101', grade: 'C', year: '2022' },
          { course: 'MATH123', grade: 'A', year: '2022' },
          { course: 'STAT111', grade: 'A', year: '2022' },
          { course: 'DCT103', grade: 'A', year: '2022' },
         
        ];
        setAllGrades(fetchedGrades);
        setFilteredGrades(fetchedGrades); 
      }, 1000); 
    };

    fetchAllGrades();
  }, []);

  const handleYearFilterChange = (event) => {
    const selectedYear = event.target.value;
    setSelectedYear(selectedYear);

    const filtered = allGrades.filter((grade) => grade.year === selectedYear);
    setFilteredGrades(filtered);
  };

  return (
    <div>
      <Navigation/>
      <h2>Grade Report</h2>
      <div>
        <label htmlFor="yearFilter">Filter by Year:</label>
        <select id="yearFilter" value={selectedYear} onChange={handleYearFilterChange}>
          <option value="">All</option>
          {/* Replace with your list of available years */}
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <h3>Detailed View of Courses and Grades:</h3>
      <div className="gradetable">
      <table>
        <thead>
          <tr>
            <th className='report-headers'>Course</th>
            <th className='report-headers'>Grade</th>
            <th className='report-headers'>Year</th>
          </tr>
        </thead>
        <tbody>
          {filteredGrades.map((grade, index) => (
            <tr key={index}>
              <td className='report-headers'>{grade.course}</td>
              <td className='report-headers'>
                {grade.grade === 'A' && 'A'}
                {grade.grade === 'B' && 'B'}
                {grade.grade === 'C' && 'C'}
                {grade.grade === 'D' && 'D'}
                {grade.grade === 'F' && 'F'}
                {/* Add more conditions for different letter grades */}
              </td>
              <td className='report-headers'>{grade.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <Footer/>
    </div>
    
  );
};

export default GradeReportPage;
