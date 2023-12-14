import React from 'react';
import './App.css';


const Dashboard = () => {
  return(
    <div>
    <header>
        <h1>Welcome to the Dashboard</h1>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Grades</a></li>
                <li><a href="#">Report Missing Grades</a></li>
                <li><a href="#">Contact Instructors</a></li>
                <li><a href="#">Help & Support</a></li>
                <li><a href="#">Logout</a></li>
            </ul>
        </nav>
    </header>

    <section class="grades-section">
        <h2>Current Grades</h2>
        <h3>CCT: 18 </h3><h3>CCP: 18 </h3><h3>CGPA: 3.58 </h3>
        <table class="grades-table">
            <thead>
                <tr>
                    <th>Course Code</th>
                    <th>Course Name</th>
                    <th>Credit Hour</th>
                    <th>Grade</th>
                    <th>GPT</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>COMP101</td>
                    <td>Introduction to Computer Science</td>
                    <td>3</td>
                    <td>B+</td>
                    <td>10.5</td>
                </tr>
                <tr>
                    <td>COMP201</td>
                    <td>Data Structures</td>
                    <td>3</td>
                    <td>A</td>
                    <td>12</td>
                </tr>
                <tr>
                    <td>COMP301</td>
                    <td>Introduction to Programming</td>
                    <td>3</td>
                    <td>B</td>
                    <td>9</td>
                </tr>
                <tr>
                    <td>COMP401</td>
                    <td>Cryptocurrency and Smart Contracts</td>
                    <td>3</td>
                    <td>A</td>
                    <td>12</td>
                </tr>
                <tr>
                    <td>COMP501</td>
                    <td>Blockchain Technology</td>
                    <td>3</td>
                    <td>B+</td>
                    <td>10.5</td>
                </tr>
                <tr>
                    <td>COMP601</td>
                    <td>Introduction to De-Fi</td>
                    <td>3</td>
                    <td>B+</td>
                    <td>10.5</td>
                </tr>

                
            </tbody>
        </table>
    </section>

    <section class="notifications-section">
        <h2>Notifications</h2>
        <div class="notification">
            <p>You have a missing grade for COMP302 - Algorithms.</p>
            <a href="#">View Details</a>
        </div>
        <div class="notification">
            <p>You have a missing grade for MATH201 - Linear Algebra.</p>
            <a href="#">View Details</a>
        </div>
        
    </section>
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
export default Dashboard;