import React, { useState } from 'react';
import Footer from './FooterCode';
import './GradeReportPage.css';

const GradeReportPage = () => {
  const mockupData = [
    { semester: 'First Semester(Level 100)', courses: ['INTRODUCTION TO COMPUTER SCIENCE(DCIT 101)', 
    'OFFICE PRODUCTIVITY TOOLS(DCIT 103)', 
    'INTRODUCTION TO STATISTICS AND PROBABILITY(STAT 111)',
    'ALGEBRA AND TRIGONOMETRY(MATH 121)',
    'GEOMETRY I(MATH 123)', 
    'CRITICAL THINKING(UGRC 250)'], 
    grades: ['A', 'B', 'C', 'B+', 'A', 'C'] },

    
    { semester: 'Second Semester(Level 100)', courses: ['PROGRAMMING I',
     'DIGITAL AND LOGICAL CIRCUITS(DCIT 203)', 
     'CALCULUS II(MATH 223)',
     'COMPUTER DESIGN AND ARCHITECTURE(DCIT 207)',
     'MULTIMEDIA AND WEB DESIGN(DCIT 205',
     'ACADEMIC WRITING II(CBAS 210)'
    ], 
    grades: ['B', 'A', 'A', 'D', 'C+', 'A'] },


    { semester: 'Second Semester(Level 200)', courses: ['PROGRAMMING I',
    'DIGITAL AND LOGICAL CIRCUITS(DCIT 203)', 
    'CALCULUS II(MATH 223)',
    'COMPUTER DESIGN AND ARCHITECTURE(DCIT 207)',
    'MULTIMEDIA AND WEB DESIGN(DCIT 205',
    'ACADEMIC WRITING II(CBAS 210)'
   ], 
   grades: ['B', 'A', 'A', 'D', 'C+', 'A'] },


  ];

  const [selectedSemester, setSelectedSemester] = useState('');

  const filteredData = selectedSemester
    ? mockupData.filter((data) => data.semester === selectedSemester)
    : mockupData;

  return (
    <div>

<div className="grade-report-container">
      <h2>Grade Report</h2>

      <div className="filter-section">
        <label>Semesters:</label>
        <select
          value={selectedSemester}
          onChange={(e) => setSelectedSemester(e.target.value)}
        >
          <option value="">All Semesters</option>
          <option value="First Semester(Level 100)">Semester 1</option>
          <option value="Second Semester(Level 100)">Semester 2</option>
          <option value="Second Semester(Level 200)">Semester 3</option>

        </select>
      </div>

      <div className="grade-list">
        {filteredData.map((data) => (
          <div key={data.semester} className="semester-section">
            <h3>{data.semester}</h3>
            <ul>
              {data.courses.map((course, index) => (
                <li key={index}>
                  <span className='course-name'>{course}:</span> <span className='grade'>{data.grades[index]}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <Footer />

    </div>
    
    
   
  );
};

export default GradeReportPage;
