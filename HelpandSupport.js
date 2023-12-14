import React from 'react';
import './App.css';


const HelpandSupport = () => {
  return(
<div>
    <header>
        <h1>Help and Support</h1>
        <nav>
            <ul>
                <li><a href="LandingPage.html">Home</a></li>
                <li><a href="Dashboard.html">Dashboard</a></li>
                <li><a href="Grades.html">Grades</a></li>
                <li><a href="RMG.html">Report Missing Grades</a></li>
                <li><a href="ICP.html">Contact Instructors</a></li>
                <li><a href="Login.html">Logout</a></li>
            </ul>
        </nav>
    </header>

    <section class="faq-section" />
        <h2>Frequently Asked Questions</h2>
        <div class="faq">
            <h3>How can I check my grades?</h3>
            <p>
                You can check your grades by logging into your account and navigating to the "Grades" section.
            </p>
        </div>
        <div class="faq">
            <h3>When will online grade updates be available?</h3>
            <p>
                Online grade updates are typically available within 24-48 hours after the completion of an assessment.
            </p>
        </div>
       
   

    <section class="contact-section" />
        <h2>Contact Technical Support</h2>
        <form />
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit">Submit</button>
        
    <p></p>

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
  export default HelpandSupport;