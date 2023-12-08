import React, { useState, useEffect } from 'react';

const GradeReportPage = () => {
  const [allGrades, setAllGrades] = useState([]);
  const [filteredGrades, setFilteredGrades] = useState([]);
  const [selectedYear, setSelectedYear] = useState(''); 

  useEffect(() => {
    const fetchAllGrades = () => {
      setTimeout(() => {
        
        const fetchedGrades = [
          { course: 'Math', grade: 85, year: '2023' },
          { course: 'Science', grade: 92, year: '2023' },
          { course: 'History', grade: 78, year: '2022' },
          { course: 'English', grade: 90, year: '2022' },
          
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
      <table>
        <thead>
          <tr>
            <th>Course</th>
            <th>Grade</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {filteredGrades.map((grade, index) => (
            <tr key={index}>
              <td>{grade.course}</td>
              <td>{grade.grade}</td>
              <td>{grade.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GradeReportPage;
