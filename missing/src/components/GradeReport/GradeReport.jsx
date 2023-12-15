import React, { useState } from 'react';

const GradeReport = () => {
  
  const gradesData = [
    { course: 'UGRC 210	Academic Writing II', grade: 'C+', semester: 'First Semester' },
    { course: 'DCIT 201	Programming I', grade: 'B', semester: 'First Semester' },
    { course: 'DCIT 203	Digital and Logic Systems Design', grade: 'B', semester: 'First Semester' },
    { course: 'DCIT 205	Multi Media and Web Design', grade: 'C', semester: 'First Semester' },
    { course: 'DCIT 207	Computer Architecture & Organisation', grade: 'A', semester: 'First Semester' },
    { course: 'DCIT 209	E-Business Architectures', grade: 'B', semester: 'First Semester' },
    { course: 'UGRC 220	Introduction to African Studies', grade: 'C', semester: 'Second Semester' },
    { course: 'DCIT 202	Mobile Application Development', grade: 'C+', semester: 'Second Semester' },
    { course: 'DCIT204	Data Structures & Algorithm I', grade: 'A', semester: 'Second Semester' },
    { course: 'DCIT206	Systems Administration', grade: 'D', semester: 'Second Semester' },
    { course: 'DCIT208	Software Engineering', grade: 'C+', semester: 'Second Semester' },
    { course: 'DCIT 200	Internship', grade: 'B+', semester: 'Second Semester' },
    { course: 'DCIT 214	Information Modeling and Specification', grade: 'F', semester: 'Second Semester' },
    
  ];

  const [selectedYear, setSelectedYear] = useState('All');

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const filteredGrades = selectedYear === 'All'
    ? gradesData
    : gradesData.filter(item => item.semester.includes(selectedYear));

  return (
    <div>
      <h2>Grade Report</h2>
      <label htmlFor="yearFilter">Filter by Year:</label>
      <select id="yearFilter" onChange={handleYearChange} value={selectedYear}>
        <option value="All">All</option>
        <option value="First Semester">First Semester</option>
        <option value="Second Semester">Second  Semester</option>
        
      </select>

      <table>
        <thead>
          <tr>
            <th>Course</th>
            <th>Grade</th>
            <th>Semester</th>
          </tr>
        </thead>
        <tbody>
          {filteredGrades.map((item, index) => (
            <tr key={index}>
              <td>{item.course}</td>
              <td>{item.grade}</td>
              <td>{item.semester}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GradeReport;
