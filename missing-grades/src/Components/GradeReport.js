import React, { useState } from "react";
import './GradeReport.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function GradeReport() {
  const [isNavActive, setNavActive] = useState(false);
  const [gradeData, setGradeData] = useState([
    { courseName: 'ACADEMIC WRITING I',courseCode:'UGRC 110', grade: 'B', gradePoint: 9, semester: 'First Sem', academicYear: '2021/2022' },
    { courseName: 'CRITICAL THINKING AND PRACTICAL REASONING',courseCode:'UGRC 150', grade: 'B', gradePoint: 9, semester: 'First Sem', academicYear: '2021/2022' },
    { courseName: 'INTRO TO COMPUTER SCIENCE',courseCode:'DCIT 101', grade: 'A', gradePoint: 12, semester: 'First Sem', academicYear: '2021/2022' },
    { courseName: 'INTRO TO ECONOMICS',courseCode:'ECONS101', grade: 'B', gradePoint: 9, semester: 'Second Sem', academicYear: '2021/2022' },
    { courseName: 'OFFICE PRODUCTIVITY TOOLS',courseCode:'DCIT 103', grade: 'C+', gradePoint: 7.5, semester: 'Second Sem', academicYear: '2021/2022' },
    { courseName: 'MATHEMATICS FOR IT PROFESSIONALS',courseCode:'DCIT 105', grade: 'C', gradePoint: 6, semester: 'First Sem', academicYear: '2022/2023' },
    { courseName: 'INTRO TO STATISTICS AND PROBABILITY',courseCode:' STATS 111', grade: 'B+', gradePoint: 10.5, semester: 'Second Sem', academicYear: '2022/2023' },
    { courseName: 'CALCULUS I',courseCode:'MATHS 122', grade: 'A', gradePoint: 12, semester: 'First Sem', academicYear: '2022/2023' },
    { courseName: 'PROGRAMMING I',courseCode:'DCIT 201', grade: 'B+', gradePoint: 10.5, semester: 'Second Sem', academicYear: '2022/2023' },
    { courseName: 'DIGITAL AND LOGIC SYSTEM DESIGN',courseCode:'DCIT 203', grade: 'B', gradePoint: 9, semester: 'First Sem', academicYear: '2023/2024' },
    { courseName: 'MULTIMEDIA AND WEB DESIGN',courseCode:'DCIT 205', grade: 'A', gradePoint: 12, semester: 'Second Sem', academicYear: '2023/2024' },
    
  ]);
  const [sortCriteria, setSortCriteria] = useState('courseName');

  function toggleNav() {
    setNavActive(!isNavActive);
  }

  function handleSortChange(event) {
    setSortCriteria(event.target.value);
  }

  function sortData() {
    return [...gradeData].sort((a, b) => {
      if (sortCriteria === 'semester') {
        if (a.semester < b.semester) return -1;
        if (a.semester > b.semester) return 1;
        // If semesters are equal, compare by academicYear
        if (a.semester === b.semester) {
          if (a.academicYear < b.academicYear) return -1;
          if (a.academicYear > b.academicYear) return 1;
        }
      } else {
        // Default sorting logic (by semester and academicYear)
        if (a.semester < b.semester) return -1;
        if (a.semester > b.semester) return 1;
        if (a.semester === b.semester) {
          if (a.academicYear < b.academicYear) return -1;
          if (a.academicYear > b.academicYear) return 1;
        }
      }
      return 0;
    });
  }

  const sortedGradeData = sortData();

  return (
    <div>
      <header id="header">
        <div className="top-menu-box">
          <div className="ugLogo">
            <div>
              <img src="https://www.ug.edu.gh/sites/default/files/ug_standard_new_sl_1.png" alt="UG logo" width="150px" />
            </div>
          </div>
          <div>
            <div className={`sidenav ${isNavActive ? 'active' : ''}`}>
            <ul className="sideList">
                <li className="navbar-item"><a href="www.sakai ug.edu.gh" className="navbar-link">SAKAI<span></span></a></li>
                <li className="navbar-item"><Link to="/" className="navbar-link">HOMEPAGE<span></span></Link></li>
                <li className="navbar-item"><a href="#" className="navbar-link">MISWEB<span></span></a></li>
                <li className="navbar-item"><Link to="/gradereport" className="navbar-link">GRADE REPORT<span></span></Link></li>
                <li className="navbar-item"><Link to="/gradeform" className="navbar-link">MISSING GRADE<span></span></Link></li>
                <li className="navbar-item"><Link to="/helpsupport" className="navbar-link">HELP & SUPPORT<span></span></Link></li>
              </ul>
            </div>
            <nav className="navbar">
              <ul>
                <li className="navbar-item"><div className="menu-icon" onClick={toggleNav}>&#9776;</div></li>
                <li className="navbar-item">
                  <FontAwesomeIcon className="avatar" icon={faUserCircle} /> <span className="user-name">Mr. BEN</span>
                  <a href="" className="navbar-link">LOGOUT<span></span></a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <div className="welcome-message">
        <h1>Grade Report</h1>
        <div className="filter-and-sort-options">
          <select className="semester-filter" onChange={handleSortChange} value={sortCriteria}>
            <option value="semester">Sort by Semester</option>
            <option value="academicYear">Sort by Academic Year</option>
          </select>
      </div>
      </div>
      <div className="metric-cards">
  <div className="metric-card">
    <h2>GPA</h2>
    <p className="gpa">3.25</p>
  </div>
  <div className="metric-card">
    <h2>Total Credits Completed</h2>
    <p className="total-credits">56</p>
  </div>
  <div className="metric-card">
    <h2>Completed Courses</h2>
    <p className="completed-courses">19</p>
  </div>
</div>

<table className="grade-cards-table">
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Course Code</th>
            <th>Grade</th>
            <th>Grade Point</th>
            <th>Semester</th>
            <th>Academic Year</th>
          </tr>
        </thead>
        <tbody>
          {sortedGradeData.map((row, index) => (
            <tr key={index}>
              <td>{row.courseName}</td>
              <td>{row.courseCode}</td>
              <td>{row.grade}</td>
              <td>{row.gradePoint}</td>
              <td>{row.semester}</td>
              <td>{row.academicYear}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Footer />
    </div>
    
  );
}

export default GradeReport;
