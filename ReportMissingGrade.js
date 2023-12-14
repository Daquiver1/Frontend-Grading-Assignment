import React from 'react';
import './App.css';


const ReportMissingGrade = () => {
  return(
<div>
    <header>
        <h1>Missing Grade Form</h1>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">Grades</a></li>
                <li><a href="#">Contact Instructors</a></li>
                <li><a href="#">Help & Support</a></li>
                <li><a href="#">Logout</a></li>
            </ul>
        </nav>
    </header>

    <section class="form-section" />
        <h2>Report a Missing Grade</h2>
        <form />
            <label for="course-name">Course Name:</label>
            <input type="text" id="course-name" name="course-name" required />

            <label for="instructor-name">Instructor Name:</label>
            <input type="text" id="instructor-name" name="instructor-name" required />

            <label for="expected-grade">Expected Grade:</label>
            <input type="text" id="expected-grade" name="expected-grade" required />

            <label for="explanation">Explanation:</label>
            <textarea id="explanation" name="explanation" rows="4" required></textarea>

            <button type="submit">Submit</button>
        
        <div class="confirmation">
            <p>Your missing grade report has been submitted. Thank you!</p>
        </div>
    

    <footer>
        <div class="footer-container">
            <div class="footer-section">
                <h2>Contact Info</h2>
                <p>Email: info@mgrs.com</p>
                <p>Phone: 024-549-6037</p>
            </div>
            <div class="footer-section">
                <h2>Office Location</h2>
                <p>5th Street, Legon</p>
                <p>City, State 12345</p>
            </div>
            <div class="footer-section">
                <h2>Office Hours</h2>
                <p>Monday-Friday: 9am - 5pm</p>
                <p>Saturday: 10am - 2pm</p>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2022 MGRS. All rights reserved.</p>
        </div>
    </footer>
</div>


  );
};
  export default ReportMissingGrade;