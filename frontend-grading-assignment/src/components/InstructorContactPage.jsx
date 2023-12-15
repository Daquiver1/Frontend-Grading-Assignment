import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
import '../styles/Dashboard.css'

function InstructorContactPage() {
 

 return (
    <div className="inst_container">
      <h1 className="contact-title">Get in touch </h1>
      <ul className="instructor-list">
        <li>
          <h2 className="instructor-name">Dr. Nyamekye Gyedu</h2>
          <h4 className="instructor-email">gyedunyam@email.com</h4>
          <h4 className="contact-button">Phone:0543377892 </h4>
        </li>
        <li>
          <h2 className="instructor-name">Charles Brentford</h2>
          <h4 className="instructor-email">brentcharles@email.com</h4>
          <h4 className="contact-button">Phone:0234455672 </h4>
        </li>
        
      </ul>
    <nav>
      <li><Link to="/grade-report">Grade Report</Link></li>
          <li><Link to="/missing-grade-form">Report Missing Grade</Link></li>
          <li><Link to="/instructor-contact-page">Instructor Contact</Link></li>
          </nav>
    </div>
 );
}

export default InstructorContactPage;