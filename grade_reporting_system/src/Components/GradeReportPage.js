import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import '../CSS/GradeReportPage.css'; 
import UniversalComponent from './UniversalComponent';

const GradeReportPage = () => {
  const [selectedYear, setSelectedYear] = useState('2023'); 
  const [gradeData, setGradeData] = useState([
    { course: 'Mathematics', grade: 'A' },
    { course: 'History', grade: 'B' },
    { course: 'DCIT 203', grade: 'B' },
    { course: 'MATH 223', grade: 'B' },
    { course: 'DCIT 205', grade: 'D' },
    { course: 'MATH 243', grade: 'B' },
  ]);

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
    setGradeData([
      { course: 'Mathematics', grade: 'A' },
      { course: 'History', grade: 'B' },
      { course: 'DCIT 203', grade: 'B' },
      { course: 'MATH 223', grade: 'B' },
      { course: 'DCIT 205', grade: 'D' },
      { course: 'MATH 243', grade: 'B' },
    ]);
  };

  const handleDownloadClick = () => {
    console.log('Downloading grade report...');
  };

  const handlePrintClick = () => {
    console.log('Printing grade report...');
  };

  return (
    <UniversalComponent>
      <div className="grade-report-container">
        <div className="grade-report-content">
          <h1>Grade Report</h1>
          <div className="filter-options">
            <label htmlFor="yearFilter">Filter by Year:</label>
            <select
              id="yearFilter"
              value={selectedYear}
              onChange={handleYearChange}
            >
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
            </select>
          </div>
          <div className="grade-table">
            <table>
              <thead>
                <tr>
                  <th>Course</th>
                  <th>Grade</th>
                </tr>
              </thead>
              <tbody>
                {gradeData.map((entry, index) => (
                  <tr key={index}>
                    <td>{entry.course}</td>
                    <td>{entry.grade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="cumulative-gpa">
            <p>Cumulative GPA: 3.5</p>
          </div>
          <div className="graphs-and-charts">
          </div>
          <div className="action-buttons">
            <button onClick={handleDownloadClick}>Download Report</button>
            <button onClick={handlePrintClick}>Print Report</button>
          </div>
          <Link to="/dashboard">
            <button className="back-button">Back to Dashboard</button>
          </Link>
        </div>
      </div>
    </UniversalComponent>
  );
};

export default GradeReportPage;
