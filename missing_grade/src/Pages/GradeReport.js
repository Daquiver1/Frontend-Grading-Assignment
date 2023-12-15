import React, { useState } from 'react';
import './Styles/gradereport.css'
import { Link } from 'react-router-dom';

const GradeList = () => {
  const [selectedSemester, setSelectedSemester] = useState('');
  const grades = [
    { semester: 'L100 SEM 1', grades: [
      { subject: 'DCIT 101', grade: 'A' },
      { subject: 'DCIT 103', grade: 'B+'},
      { subject: 'DCIT 105', grade: 'B' },
      { subject: 'STAT 111', grade: 'B' },
      { subject: 'ECON 101', grade: 'B' },
      { subject: 'UGRC 150', grade: 'B' }
    ]},
    { semester: 'L100 SEM 2', grades: [
      { subject: 'DCIT 102', grade: 'B' },
      { subject: 'DCIT 104', grade: 'C+' },
      { subject: 'STAT 112', grade: 'B' },
      { subject: 'MATH 122', grade: 'B' },
      { subject: 'ECON 102', grade: 'B' },
      { subject: 'UGRC 110', grade: 'C' }
    ]},
    { semester: 'L200 SEM 1', grades: [
      { subject: 'DCIT 201', grade: 'B' },
      { subject: 'DCIT 203', grade: 'B' },
      { subject: 'DCIT 205', grade: 'B' },
      { subject: 'DCIT 207', grade: 'B' },
      { subject: 'DCIT 209', grade: 'B' },
      { subject: 'CBAS 210', grade: 'B' }
    ]}
  ];

  const handleSemesterChange = event => {
    setSelectedSemester(event.target.value);
  };

  const filteredGrades = selectedSemester
    ? grades.filter(grade =>
        grade.semester.toLowerCase().includes(selectedSemester.toLowerCase())
      )
    : grades;

  return (
    <div className='Grades'>
      <h2>Grades</h2>
      <select value={selectedSemester} onChange={handleSemesterChange}>
        <option value="">All Semesters</option>
        <option value="L100 SEM 1">L100 SEM 1</option>
        <option value="L100 SEM 2">L100 SEM 2</option>
        <option value="L200 SEM 1">L200 SEM 1</option>
      </select>
      <table>
        <thead>
          <tr>
            <th>Semester</th>
            <th>Subject</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {filteredGrades.map((semester, index) => (
            <React.Fragment key={index}>
              <tr>
                <td rowSpan={semester.grades.length}>{semester.semester}</td>
                <td>{semester.grades[0].subject}</td>
                <td>{semester.grades[0].grade}</td>
              </tr>
              {semester.grades.slice(1).map((grade, index) => (
                <tr key={index}>
                  <td>{grade.subject}</td>
                  <td>{grade.grade}</td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
      <div className='report'>
        <p>For any missing grades click on the button to report <Link to='/missing-grade-form'><button>Report</button></Link></p>
      </div>
      </div>
  )
};

export default GradeList;