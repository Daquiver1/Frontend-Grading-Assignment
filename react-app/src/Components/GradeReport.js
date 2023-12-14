import React, { Component } from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import './GradeReport.css'


class GradeReportPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [
        { id: 1, name: 'Math121', grade: 'A', semester: 'Level 100' },
        { id: 2, name: 'Math123', grade: 'F', semester: 'Level 100' },
        { id: 3, name: 'Math126', grade: 'A-',semester: 'Level 100' },
        { id: 4, name: 'Math123', grade: 'F', semester: 'Level 100' },
        { id: 5, name: 'Math126', grade: 'D', semester: 'Level 100' },
        { id: 6, name: 'DCIT103', grade: 'B', semester: 'Level 100' },
        { id: 7, name: 'DCIT101', grade: 'C', semester: 'Level 100' },
        { id: 8, name: 'DCIT102', grade: 'A', semester: 'Level 100' },
        { id: 9, name: 'DCIT104', grade: 'D', semester: 'Level 100' },
        { id: 10, name: 'STAT111', grade: 'B', semester: 'Level 100' },
        { id: 11, name: 'STAT112', grade: 'A', semester: 'Level 100' },
        { id: 12, name: 'UGRC150', grade: 'B', semester: 'Level 100' },
        { id: 13, name: 'MATH223', grade: 'N/A', semester: 'Level 200' },
        { id: 14, name: 'CBAS201', grade: 'N/A', semester: 'Level 200' },
        { id: 15, name: 'DCIT205', grade: 'N/A', semester: 'Level 200' },
        { id: 16, name: 'DCIT206', grade: 'N/A', semester: 'Level 200' },
        { id: 17, name: 'DCIT203', grade: 'N/A', semester: 'Level 200' },
        { id: 18, name: 'DCIT201', grade: 'N/A', semester: 'Level 200' },
      ],
      selectedSemester: 'All Semesters',
    };
  }

  handleSemesterChange = (event) => {
    this.setState({ selectedSemester: event.target.value });
  };

  render() {
    const { courses, selectedSemester } = this.state;

    const filteredCourses =
      selectedSemester === 'All Semesters'
        ? courses
        : courses.filter((course) => course.semester === selectedSemester);

    return (
      <>
      <Navbar />
      <div className="grade-report-page">
        <h1 className="page-title">Grade Report </h1>
        <label className="filter-label">
          Filter by Academic Level:
          <select
            className="semester-select"
            value={selectedSemester}
            onChange={this.handleSemesterChange}
          >
            <option value="All Semesters">All Levels</option>
            <option value="Level 100">Level 100</option>
            <option value="Level 200">Level 200</option>
            <option value="Level 300">Level 300</option>
            <option value="Level 400">Level 400</option>
            
          </select>
        </label>

        <table className="grade-table">
          <thead>
            <tr>
              <th className="table-header">Course</th>
              <th className="table-header">Grade</th>
              <th className="table-header">Semester</th>
            </tr>
          </thead>
          <tbody>
            {filteredCourses.map((course) => (
              <tr key={course.id} className="table-row">
                <td className="table-cell">{course.name}</td>
                <td className="table-cell">{course.grade}</td>
                <td className="table-cell">{course.semester}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
      </>
    );
  }
}

export default GradeReportPage;
