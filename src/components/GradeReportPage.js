import React, { useState, useEffect } from 'react';
import Style from './GradeReport.module.css';

const GradeReportPage = () => {
  const [grades, setGrades] = useState([]);
  const [selectedYear, setSelectedYear] = useState('all');

  // Grade data 
  const gradeData = [
    { id: 1, course: 'Cloud Computing', instructor: 'Prof. John', grade: 'A', year: 2023 },
    { id: 2, course: 'Automata Theory', instructor: 'Prof. James', grade: 'D', year: 2023 },
    { id: 3, course: 'Networking', instructor: 'Prof. Hasana', grade: 'C', year: 2022 },
    { id: 4, course: 'Operating Systems', instructor: 'Prof. Kwadwo', grade: 'F', year: 2022 },
    { id: 5, course: 'Descrete Maths', instructor: 'Prof. Hanson', grade: 'C', year: 2023 },
    { id: 6, course: 'Linear Algbra', instructor: 'Prof. Philomina', grade: 'C', year: 2022 },
    { id: 7, course: 'Mobile App Development', instructor: 'Prof. Hussien', grade: 'A', year: 2023 },
    { id: 8, course: 'Scripting Languages', instructor: 'Prof. Johnson', grade: 'F', year: 2023 },
    { id: 9, course: 'Computer Architecture', instructor: 'Prof. Courage', grade: 'C', year: 2022 },
    { id: 10, course: 'Digital Electronics ', instructor: 'Prof. Jonas', grade: 'D', year: 2022 },
    { id: 11, course: 'Programming And Problem solving', instructor: 'Prof. Grace', grade: 'A', year: 2023 },
    { id: 12, course: 'Differencial and Integral Calculus', instructor: 'Prof. Daniel', grade: 'A', year: 2022 },
    
  ];

  useEffect(() => {
    setGrades(gradeData);
  }, []);

  const filterGradesByYear = (year) => {
    setSelectedYear(year);
  };

  const filteredGrades = selectedYear === 'all' ? grades : grades.filter(grade => grade.year === parseInt(selectedYear, 10));

  return (
    <div className="grade-report-container">
      <h2>Grade Report</h2>
      
      <label htmlFor="yearFilter">Filter by Year:</label>
      <select
        id="yearFilter"
        value={selectedYear}
        onChange={(e) => filterGradesByYear(e.target.value)}
      >
        <option value="all">All</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
      </select>

      <table>
        <thead>
          <tr>
            <th>Course</th>
            <th>Instructor</th>
            <th>Grade</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {filteredGrades.map((grade) => (
            <tr key={grade.id}>
              <td>{grade.course}</td>
              <td>{grade.instructor}</td>
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
