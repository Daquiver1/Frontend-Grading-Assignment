import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../CSS/GradeReportPage.css'; // Import the corresponding CSS styles
import UniversalComponent from './UniversalComponent';

const GradeReportPage = () => {
  const [selectedYear, setSelectedYear] = useState('2023'); // Initial year
  const [gradeData, setGradeData] = useState([
    { course: 'Mathematics', grade: 'A' },
    { course: 'History', grade: 'B' },
    // Add more courses and grades as needed
  ]);

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
    // Logic to fetch grade data for the selected year
    // For the example, we'll use dummy data
    setGradeData([
      { course: 'Mathematics', grade: 'A' },
      { course: 'History', grade: 'B' },
      // Add more courses and grades as needed
    ]);
  };

  const handleDownloadClick = () => {
    // Logic to download the grade report
    // For the example, we'll log a message to the console
    console.log('Downloading grade report...');
  };

  const handlePrintClick = () => {
    // Logic to print the grade report
    // For the example, we'll log a message to the console
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
              {/* Add more options for different years as needed */}
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
            {/* Add graphs or charts visualizing grade distribution */}
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
