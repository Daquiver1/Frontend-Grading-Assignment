import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Dashboard.css'

function DashboardPage() {
 return (
    <div>
      <h1 className='db_text'>Dashboard</h1>

      <div className='text_grid'>
        <div className='c_grade'>
          <h2 className='db_text'>Current Grades</h2>
          <p className='db_text'>Overview of your current grades</p>
          <div className="course-table-container">
      <table>
        <thead>
          <tr>
            <th>Course Code</th>
            <th>Course Name</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>CS101</td>
            <td>Introduction to Computer Science</td>
            <td>A</td>
          </tr>
          <tr>
            <td>MATH121</td>
            <td>Calculus I</td>
            <td>B</td>
          </tr>
          <tr>
            <td>CS121</td>
            <td>Programming i</td>
            <td>A</td>
          </tr>
        </tbody>
      </table>
    </div>
        </div>   
        <div className='m_grade'>  
          <h2 className='db_text'>Missing Grades</h2>
          <p className='db_text'>Any missing grades will be displayed here with an alert or notification.</p>
          <div className="course-table-container">
      <table>
        <thead>
          <tr>
            <th>Course Code</th>
            <th>Course Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>CS111</td>
            <td>Discrete Maths</td>
          </tr>
          <tr>
            <td>MATH122</td>
            <td>Basic Maths</td>
          </tr>
        </tbody>
      </table>
    </div>
          
        </div> 

      </div>
      
      <nav>
        <ul>
          <li><Link to="/grade-report">Grade Report</Link></li>
          <li><Link to="/missing-grade-form">Report Missing Grade</Link></li>
          <li><Link to="/instructor-contact-page">Instructor Contact</Link></li>
        </ul>
      </nav>
    </div>
 );
}

export default DashboardPage;