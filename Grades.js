import React from 'react';
import './App.css';


const Grades = () => {
  return(
<div>
    <header>
        <h1>Grade Report</h1>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">Report Missing Grades</a></li>
                <li><a href="#">Contact Instructors</a></li>
                <li><a href="#">Help & Support</a></li>
                <li><a href="#">Logout</a></li>
            </ul>
        </nav>
    </header>

    <section class="filter-section">
        <h2>Filter Grades</h2>
        <form>
            <label for="semester">Select Semester:</label>
            <select id="semester" name="semester">
                <option value="all">All</option>
                <option value="firstsemester">First Semester</option>
                <option value="secondsemester">Second Semester</option>
                
            </select>

            <label for="academic-year">Select Academic Year:</label>
            <select id="academic-year" name="academic-year">
                <option value="all">All</option>
                <option value="2022-2023">2022-2023</option>
                <option value="2023-2024">2023-2024</option>
            </select>

            <button type="submit">Apply Filter</button>
        </form>
    </section>

    <section class="grades-section">
        <h2>All Grades</h2>
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
export default Grades;