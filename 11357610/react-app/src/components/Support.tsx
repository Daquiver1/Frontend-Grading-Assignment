import React from "react";
import "./Support.css"; // Import the corresponding CSS file

const HelpSupport = () => {
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

      <main className="help-support-content">
        <section id="faq" className="grid-item">
          <h2>Frequently Asked Questions</h2>
          <p>Below are some common questions about grade reporting:</p>
          <ul>
            <li>
              <strong>Question 1:</strong> Answer to question 1.
            </li>
            <li>
              <strong>Question 2:</strong> Answer to question 2.
            </li>
            <li>
              <strong>Question 3:</strong> Answer to question 3.
            </li>
            {/* Add more FAQs as needed */}
          </ul>
        </section>

        <section id="contact-support" className="grid-item">
          <h2>Contact Technical Support</h2>
          <p>
            For any technical assistance or inquiries, please fill out the form
            below:
          </p>
          <form>
            <label htmlFor="name">Your Name:</label>
            <input type="text" id="name" name="name" required />
            <br />
            <br />
            <label htmlFor="email">Your Email:</label>
            <input type="email" id="email" name="email" required />
            <br />
            <br />
            <label htmlFor="message">Message:</label>
            <br />
            <textarea id="message" name="message" required></textarea>
            <br />
            <br />
            <button className="learn-more" type="submit">
              Submit
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

export default HelpSupport;
