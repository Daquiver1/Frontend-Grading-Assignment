
import './GradeReport.css'
import React, { useState } from 'react';
import Header from './Header';
import Footer from './footer';
import { Link } from 'react-router-dom';

const GradeReport = () => {
  
  const [gradeData] = useState([
    
    { course: 'MATH 132 ', grade: 'A', semester: 'First sem 2022' },
    { course: 'MATH121', grade: 'A', semester: 'First sem 2022' },
    { course: 'STAT 111', grade: ' ', semester: 'First sem 2022' },
    { course: 'DCIT 101', grade: 'A', semester: 'First sem 2022' },
    { course: 'DCIT 103', grade: 'A', semester: 'First sem 2022' },
    { course: 'UGRC 150', grade: 'A', semester: 'First sem 2022' },
    { course: 'UGRC 110', grade: 'B+', semester: 'Second sem 2022' },
    { course: 'MATH 122', grade: 'B+', semester: 'Second sem 2022' },
    { course: 'MATH 126', grade: 'B+', semester: 'Second sem 2022' },
    { course: 'STAT 112', grade: 'B+', semester: 'Second sem 2022' },
    { course: 'DCIT 102', grade: 'B+', semester: 'Second sem 2022' },
    { course: 'DCIT 104', grade: 'B+', semester: 'Second sem 2022' },
    
    

    { course: 'MATH 223 ', grade: 'A', semester: 'First sem 2023' },
    { course: 'DCIT 201', grade: 'A', semester: 'First sem 2023' },
    { course: 'DCIT 203', grade: 'A', semester: 'First sem 2023' },
    { course: 'DCIT 205', grade: 'A', semester: 'First sem 2023' },
    { course: 'DCIT 207', grade: 'A', semester: 'First sem 2023' },
    { course: 'UGRC 220', grade: 'A', semester: 'First sem 2023' },
    { course: 'UGRC 110', grade: 'B+', semester: 'Second sem 2023' },
    { course: 'MATH 122', grade: 'B+', semester: 'Second sem 2023' },
    { course: 'MATH 126', grade: 'B+', semester: 'Second sem 2023' },
    { course: 'STAT 112', grade: 'B+', semester: 'Second sem 2023' },
    { course: 'DCIT 102', grade: 'B+', semester: 'Second sem 2023' },
    { course: 'DCIT 104', grade: 'B+', semester: 'Second sem 2023' },
 
    
  ]);

  const [selectedYear, setSelectedYear] = useState('All');
  const [filteredData, setFilteredData] = useState(gradeData);


  const handleFilter = (event) => {
    const selectedYear = event.target.value;
    setSelectedYear(selectedYear);

    if (selectedYear === 'All') {
      setFilteredData(gradeData);
    } else {
      const filteredCourses = gradeData.filter(
        (course) => course.semester.includes(selectedYear)
      );
      setFilteredData(filteredCourses);
    }
  };

  return (
    <>
    <Header/>
    <div>
      <h1 className='gradetitle'>Grade Report</h1>
      <div>
        <label htmlFor="yearFilter">Filter by Year:</label>
        <select id="yearFilter" value={selectedYear} onChange={handleFilter}>
          <option value="All">All</option>
          <option value="2022">2022</option>
          <option value="sem">sem</option>
          <option value="2023">2023</option>
          {}
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>Course</th>
            <th>Grade</th>
            <th>Semester</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((course, index) => (
            <tr key={index}>
              <td>{course.course}</td>
              <td>{course.grade}</td>
              <td>{course.semester}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div id='report_container'>
        <h3>One missing grade found</h3>
            <Link to="missing_grade_form"><button className='report_button'>Report</button></Link>
    </div>
    <Footer/>
 </> );
};

export default GradeReport;