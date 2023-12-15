import React from "react";
import "./ContactInstructor.css"; // Import the corresponding CSS file

const ContactInstructor = () => {
  return (
    <>
      <header className="header">
        <div className="dept-logo">
          <a href="index.html">
            <img
              src="img/CS_logo.png"
              className="logo"
              alt="Computer Science Department"
            />
          </a>
        </div>
        <nav className="navbar">
          <ul>
            <li>
              <a href="index.html">Dashboard</a>
            </li>
            <li>
              <a href="about.html">Grade Report</a>
            </li>
            <li>
              <a href="gallery.html" target="_blank">
                Missing Grade Report
              </a>
            </li>
            <li>
              <a href="contact.html">Contact Instructor</a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="contact-instructor-content">
        <section id="instructor-list" className="grid-item">
          <h2>Contact Instructors</h2>
          <p>List of instructors with contact details:</p>
          <ul>
            <li>
              <strong>Instructor 1:</strong> Contact info (email/phone).
            </li>
            <li>
              <strong>Instructor 2:</strong> Contact info (email/phone).
            </li>
            <li>
              <strong>Instructor 3:</strong> Contact info (email/phone).
            </li>
            {/* Add more instructors as needed */}
          </ul>
        </section>

        <section id="send-email" className="grid-item">
          <h2>Send Email to Instructor</h2>
          <p>Fill out the form below to send an email:</p>
          <form>
            <label htmlFor="instructor-email">Instructor's Email:</label>
            <input
              type="email"
              id="instructor-email"
              name="instructor-email"
              required
            />
            <br />
            <br />
            <label htmlFor="email-message">Email Message:</label>
            <br />
            <textarea
              id="email-message"
              name="email-message"
              required
            ></textarea>
            <br />
            <br />
            {/* Remove rows and cols attributes from textarea */}
            <button className="learn-more" type="submit">
              Send Email
            </button>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2023 Missing Grade Reporting System</p>
      </footer>
    </>
  );
};

export default ContactInstructor;
