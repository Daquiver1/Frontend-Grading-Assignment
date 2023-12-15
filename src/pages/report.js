// GradeReport.js
import React, { useState } from 'react';
import '../pages/report.css';

const gradeData = [
  { course: 'Mathematics', code: 'MATH101', grade: 'A' },
  { course: 'Physics', code: 'PHYS101', grade: 'B' },
  { course: 'History', code: 'HIST101', grade: 'C' },
  { course: 'Programming 1', code: 'DCIT 201', grade: 'A' },
  { course: 'Economics', code: 'ECONS 2011', grade: 'C' },
  { course: 'Calculus', code: 'MATH201', grade: 'C' },
  { course: 'Accadamic writing', code: 'UGRC101', grade: 'B' },
  { course: 'Critical thinking', code: 'UGRC101', grade: 'B' },
 
];

const GradeReport = () => {
  const [filterTerm, setFilterTerm] = useState('');

  const handleFilterChange = (event) => {
    setFilterTerm(event.target.value);
  };

  const filteredGradeData = gradeData.filter(
    (data) =>
      data.code.toLowerCase().includes(filterTerm.toLowerCase()) ||
      data.course.toLowerCase().includes(filterTerm.toLowerCase())
  );

  return (
    <div className="grade-report">
            <label>
        Filter by Code/Course:
        <input type="text" value={filterTerm} onChange={handleFilterChange} />
      </label>
      <table>
        <thead>
          <tr>
            <th>Course</th>
            <th>Code</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {filteredGradeData.map((data, index) => (
            <tr key={index}>
              <td>{data.course}</td>
              <td>{data.code}</td>
              <td>{data.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GradeReport;
