// src/GradeReportPage.js
import React from 'react';
import Layout from './Layout';
import './GradeReportPage.css';

class GradeReportPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedYear: 'all',
      selectedSemester: 'all',
    };
  }

  handleYearChange = (event) => {
    this.setState({ selectedYear: event.target.value });
  };

  handleSemesterChange = (event) => {
    this.setState({ selectedSemester: event.target.value });
  };

  render() {
    const { selectedYear, selectedSemester } = this.state;

    const gradesData = [
      { year: 2023, semester: 'Spring', course: 'Mathematics', grade: 'A' },
      { year: 2023, semester: 'Spring', course: 'Physics', grade: 'B' },
      { year: 2023, semester: 'Fall', course: 'Computer Science', grade: 'A+' },
      // ... Add more data for different years and semesters
    ];

    // Filter grades based on the selected year and semester
    const filteredGrades = gradesData.filter(
      (grade) =>
        (selectedYear === 'all' || grade.year === parseInt(selectedYear)) &&
        (selectedSemester === 'all' || grade.semester === selectedSemester)
    );

    // Extract unique years and semesters for filter options
    const uniqueYears = [...new Set(gradesData.map((grade) => grade.year))];
    const uniqueSemesters = [...new Set(gradesData.map((grade) => grade.semester))];

    return (
      <Layout>
        <div className="grade-report-container">
          <h2>Your Grade Report</h2>

          <div className="filter-section">
            <label htmlFor="yearFilter">Filter by Year:</label>
            <select id="yearFilter" value={selectedYear} onChange={this.handleYearChange}>
              <option value="all">All Years</option>
              {uniqueYears.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>

            <label htmlFor="semesterFilter">Filter by Semester:</label>
            <select id="semesterFilter" value={selectedSemester} onChange={this.handleSemesterChange}>
              <option value="all">All Semesters</option>
              {uniqueSemesters.map((semester) => (
                <option key={semester} value={semester}>
                  {semester}
                </option>
              ))}
            </select>
          </div>

          <div className="grades-table-section">
            <table className="grades-table">
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Semester</th>
                  <th>Course</th>
                  <th>Grade</th>
                </tr>
              </thead>
              <tbody>
                {filteredGrades.map((grade, index) => (
                  <tr key={index}>
                    <td>{grade.year}</td>
                    <td>{grade.semester}</td>
                    <td>{grade.course}</td>
                    <td>{grade.grade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Layout>
    );
  }
}


export default GradeReportPage;
