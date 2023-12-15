import React, { useState } from "react";
import './dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Dashboard() {
  const [isNavActive, setNavActive] = useState(false);
  const gradeData = [
    { courseName: 'DCIT 103', grade: 'C+', gradePoint: 7.5},
    { courseName: 'DCIT 105', grade: 'N/A', gradePoint: 6},
    { courseName: 'DCIT 205', grade: 'B+', gradePoint: 10.5},
    { courseName: 'DCIT 207', grade: '', gradePoint: ''},
    { courseName: 'DCIT 201', grade: 'B+', gradePoint: 10.5},
    { courseName: 'DCIT 203', grade: 'B', gradePoint: 9,},
    { courseName: 'DCIT 201', grade: 'A', gradePoint: 12},
  ];

  function toggleNav() {
    setNavActive(!isNavActive);
  }
  
  return (
    <div>
      <header id="header">
        <div className="top-menu-box">
          <div className="ugLogo">
            <img src="https://www.ug.edu.gh/sites/default/files/ug_standard_new_sl_1.png" alt="UG logo" width="150px" />
          </div>
          <div>
          <div className={`sidenav ${isNavActive ? 'active' : ''}`}>
              <ul className="sideList">
                <li className="navbar-item"><a href="www.sakai ug.edu.gh" className="navbar-link">SAKAI<span></span></a></li>
                <li className="navbar-item"><Link to="/" className="navbar-link">HOMEPAGE<span></span></Link></li>
                <li className="navbar-item"><a href="https://ienabler.ug.edu.gh/pls/prodi41/w99pkg.mi_login" className="navbar-link">MIS<span></span></a></li>
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
                  <a href="#" className="navbar-link">LOGOUT<span></span></a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <div className="welcome-message">
        <h1>Welcome, MR. BEN!</h1>
        <div className="missing-grades-alerts">
          <div className="alert-icon">
            <FontAwesomeIcon className="icon" icon={faExclamationCircle} />
          </div>
          <p className="missing-grades-count">2</p>
          <button className="view-missing-grades-btn">View Missing Grades</button>
        </div>
      </div>
      <div className="metric-cards">
  <div className="metric-card">
    <h2>GPA</h2>
    <p className="gpa">3.15</p>
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
      <th>Grade</th>
      <th>Grade Point</th>
    </tr>
  </thead>
  <tbody>
    {gradeData.map((row, index) => (
      <tr key={index}>
        <td>{row.courseName}</td>
        <td>{row.grade}</td>
        <td>{row.gradePoint}</td>
      </tr>
    ))}
  </tbody>
</table>

    </div>
  );
}

export default Dashboard;
