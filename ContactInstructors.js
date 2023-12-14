import React from 'react';
import './App.css';


const ContactInstructors = () => {
  return(
    <div>
    <header>
        <h1>Instructor's Contact</h1>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">Grades</a></li>
                <li><a href="#">Report Missing Grades</a></li>
                <li><a href="#">Help & Support</a></li>
                <li><a href="#">Logout</a></li>
            </ul>
        </nav>
    </header>

    <section class="instructor-list">
        <h2>Instructor List</h2>
        <ul>
            <li>
                <div class="instructor-details">
                    <h3>Daquiver Abrokwa</h3>
                    <p>Email: unlost1@hotmail.com</p>
                    <p>Phone: +233 22 324 6132</p>
                </div>
                <button class="send-email-btn">Send Email</button>
            </li>
            <li>
                <div class="instructor-details">
                    <h3>Albert Einstein</h3>
                    <p>Email: al.stein@gmail.com</p>
                    <p>Phone: 442-654-3210</p>
                </div>
                <button class="send-email-btn">Send Email</button>
            </li>
            <li>
                <div class="instructor-details">
                    <h3>Nana Kofi</h3>
                    <p>Email: nakof@st.ug.edu.gh</p>
                    <p>Phone: +233 52 366 7935</p>
                </div>
                <button class="send-email-btn">Send Email</button>
            </li>
            <li>
                <div class="instructor-details">
                    <h3>Elon Musk</h3>
                    <p>Email: musk@x.com</p>
                    <p>Phone: 422-622-4410</p>
                </div>
                <button class="send-email-btn">Send Email</button>
            </li>
            
        </ul>
    </section>

    <div class="email-modal">
        <div class="email-modal-content">
            <span class="close-btn">&times;</span>
            <h3>Compose Email</h3>
            <form /> 
                <label for="recipient-email">To:</label>
                <input type="text" id="recipient-email" name="recipient-email" readonly />

                <label for="subject">Subject:</label>
                <input type="text" id="subject" name="subject" required />

                <label for="message">Message:</label>
                <textarea id="message" name="message" rows="4" required></textarea>

                <button type="submit">Send</button>
            
        </div>
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
  export default ContactInstructors;