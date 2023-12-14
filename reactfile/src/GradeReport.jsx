import React, { useState } from 'react';
import './GradeReport.css';
import NavBar from './NavBar'; 
import Footer from './Footer';

const GradeReport = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    
    console.log(`Filter changed to: ${filter}`);
  };

 
  const grades = [
    { course: 'DCIT 103', grade: 'A', semester: 'First Semester 2021' },
    { course: 'DCIT 102', grade: 'B', semester: 'First Semester 2021' },
    { course: 'STAT111', grade: 'A', semester: 'First Semester 2021' },
    { course: 'ECON 101', grade: 'B+', semester: 'Second Semester 2021' },
    { course: 'DCIT 105', grade: 'B', semester: 'Second Semester 2021' },
    { course: 'UGRC 150', grade: 'B', semester: 'Second Semester 2021' },
    { course: 'STAT 223', grade: 'A', semester: 'First Semester 2022' },
    { course: 'DCIT 201', grade: 'B+', semester: 'First Semester 2022' },
    { course: 'DCIT 205', grade: 'A', semester: 'First Semester 2022' },
    { course: 'DCIT 209', grade: 'A', semester: 'Second Semester2022' },
    { course: 'DCIT 207', grade: 'A', semester: 'Second Semester 2022' },
    { course: 'DCIT 203', grade: 'A', semester: 'Second Semester 2022' },
   
  ];

  
  const filteredGrades =
    selectedFilter === 'All' ? grades : grades.filter((grade) => grade.semester === selectedFilter);

  return (

    <>
      <NavBar/>
      <div 
    style={{
      backgroundImage: 'url("/ash1.jpg")',
    }}className="Report-item">
    <div className="grade-report-container">
      <h1 className="page-header">Grade Report Page</h1>
      <div className="filter-container">
        <label htmlFor="filter">Filter by Semester/Academic Year:</label>
        <select id="filter" onChange={(e) => handleFilterChange(e.target.value)} className="filter-select">
          {['All', 'First Semester 2021', 'First Semester 2022', 'Second Semester 2021', 'Second Semester 2022'].map((filter, index) => (
            <option key={index} value={filter}>
              {filter}
            </option>
          ))}
        </select>
      </div>
      <div className="table-container">
        <table className="grade-table">
          <thead>
            <tr>
              <th>Course</th>
              <th>Grade</th>
              <th>Semester</th>
            </tr>
          </thead>
          <tbody className="tabbody">
            {filteredGrades.map((grade, index) => (
              <tr key={index}>
                <td>{grade.course}</td>
                <td>{grade.grade}</td>
                <td>{grade.semester}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
    <Footer/>
    </>
  );
};

export default GradeReport;
