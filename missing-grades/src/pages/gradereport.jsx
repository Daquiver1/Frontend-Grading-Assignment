/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import './gradereport.css';
import { Link } from "react-router-dom";



const coursesData = [
    { 
      semester: 'First Semester',
      year: '2023',
      courses: [
        { code: 'DCIT101', name: 'INTRODUCTION TO COMPUTER SCIENCE', grade: 'A' },
        { code: 'DCIT103', name: 'OFFICE PRODUCTIVITY TOOLS', grade: 'B+' },
        { code: 'ECONS101', name: 'INTRODUCTION TO ECONOMICS I', grade: 'A' },
        { code: 'MATH121', name: 'ALGEBRA AND TRIGONOMETRY', grade: 'n/a' },
        { code: 'MATH123', name: 'VECTORS AND GEOMETRY', grade: 'A' },
        { code: 'STAT111', name: 'INTRODUCTION TO STATISTICS AND PROBABILITY I', grade: 'A' },
        { code: 'UGRC110', name: 'ACADEMIC WRITING I', grade: 'B' },
        
      ],
    },
    {
      semester: 'Second Semester',
      year: '2023',
      courses: [
        { code: 'DCIT102', name: 'COMPUTER HARDWARE FUNDAMENTALS', grade: 'B' },
        { code: 'DCIT104', name: 'PROGRAMMING FUNDAMENTALS', grade: 'D' },
        { code: 'ECONS102', name: 'INTRODUCTION TO ECONOMICS II', grade: 'A' },
        { code: 'MATH122', name: 'CALCULUS I', grade: 'D+' },
        { code: 'MATH126', name: 'ALGEBRA AND GEOMETRY', grade: 'A' },
        { code: 'STAT112', name: 'INTRODUCTION TO STATISTICS AND PROBABILITY II', grade: 'A' },
        { code: 'UGRC150', name: 'CRITICAL THINKING AND PRACTICAL REASONING', grade: 'A' },
       
      ],
    },
    {
        semester: 'level 200 first Semester',
        year: '2023',
        courses: [
          { code: 'CBAS210', name: 'ACADEMIC WRITING II', grade: 'n/a' },
          { code: 'DCIT201', name: 'PROGRAMMING I', grade: 'n/a' },
          { code: 'DCIT203', name: 'DIGITAL AND LOGIC SYSTEMS DESIGN', grade: 'A' },
          { code: 'DCIT205', name: 'MULTI MEDIA AND WEB DESIGN', grade: 'n/a' },
          { code: 'MATH223', name: 'CALCULUS II', grade: 'n/a' },
          { code: 'STAT221', name: 'INTRODUCTORY PROBABILITY I', grade: 'A' },
          { code: 'USTAT223', name: 'ELEMENTARY STATISTICAL METHODS', grade: 'A' },
          { code: 'STAT230', name: 'DATA MINING', grade: 'n/a' },
         
        ],
      },
];

const gradereport = () => {

    const [selectedSemester, setSelectedSemester] = useState('');

  const handleSemesterChange = (event) => {
    setSelectedSemester(event.target.value);
  };

  return (
    <div>
      
      <div className="grade-report-body">
      <h2>Grade Report</h2>

      <label htmlFor="semester">Select Semester:</label>
      <select id="semester" onChange={handleSemesterChange} value={selectedSemester}>
        <option value="">All Semesters</option>
        {coursesData.map((semesterData) => (
          <option key={semesterData.year + semesterData.semester} value={semesterData.semester + semesterData.year}>
            {semesterData.semester} {semesterData.year}
          </option>
        ))}
      </select>

      <div className="grade-table">
        {coursesData.map((semesterData) => {
          if (!selectedSemester || selectedSemester === semesterData.semester + semesterData.year) {
            return (
              <div key={semesterData.year + semesterData.semester} className="semester-grades">
                <h3>{semesterData.semester} {semesterData.year}</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Course Code</th>
                      <th>Course Name</th>
                      <th>Grade</th>
                    </tr>
                  </thead>
                  <tbody>
                    {semesterData.courses.map((course) => (
                      <tr key={course.code}>
                        <td>{course.code}</td>
                        <td>{course.name}</td>
                        <td>{course.grade}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          }
          return null;
            })}
            </div>
        </div>

        <footer>
      <nav>
        <Link to="/dashboard">About Us</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/help">Terms & Conditions</Link>
      </nav>
      <p>&copy; 2023 University Of Ghana. All rights reserved.</p>
    </footer>
    </div>
  )
}

export default gradereport;
