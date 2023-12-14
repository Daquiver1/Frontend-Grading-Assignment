// App.js

import React from 'react';
import './App.css';


const App = () => {
  return(
    <div>
    <nav class="navbar">
        <div class="logo">
            
            <span>MGRS</span>
        </div>
        <ul class="tabs">
            <li><a href="#">Login</a></li>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Grades</a></li>
            <li><a href="#">Report Missing Grade</a></li>
            <li><a href="#">Contact Instructors</a></li>
            <li><a href="#">Help & Support</a></li>
            <li><a href="#">Logout</a></li>
        </ul>
    </nav>

    <div id="left-section">
        <h1>Missing Grade Reporting System</h1>
        <p>Welcome to the Missing Grade Reporting System (MGRS), a website that helps you track and report grades that are not recorded in your academic profile. If you are a student who has completed a course or an assignment, but you cannot find your grade on the official system, you can use this website to view your grades, report missing grades, and communicate with your instructors or academic administration.</p>
        <p>Having trouble finding your grade? </p>
        <p>Use our website to report missing grades from your academic profile</p>
        <p></p>
        <button class="GFG"
                onclick="window.location.href = 'Login.html';">
            Get Started
        </button>
        <p></p>
        <p></p>
        <p></p>
        
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
export default App;
