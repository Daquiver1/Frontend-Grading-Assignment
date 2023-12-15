import React from "react";
import "../Styles/HelpAndSupportPage.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const HelpAndSupportPage = () => {
  return (
    <div className="Page-content">
      <Navbar />
      <div className="HelpAndSupportPage">
        <h1>Help and Support</h1>
        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-container">
            <h3>How can I report a Missing grade?</h3>
            <p>
              Students should log in to the Missing Grade Reporting System
              website using their credentials.Navigate to the missing grade form
              and provide all the necessary requirements.
            </p>

            <h3>How Long Will It take For My Grade To Be Corrected?</h3>
            <p>
              This institutions often have policies outlining the expected
              timeline for resolving grading issues.The complexity of the issue
              leading to the incorrect grade can impact the time required for
              correction. Simple administrative errors may be resolved more
              quickly than disputes over grading or more complex technical
              issues.It usually takes 5-6 working days
            </p>

            <h3>
              Do you offer any Awards for students With The Total Highest Score?
            </h3>
            <p>
              Yes, we offer awards like schorlarship and many more for students
              with the highest total score every graceful academic year
            </p>
          </div>
        </div>
        <div className="contact-form">
          <h2>Contact Form</h2>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message"></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HelpAndSupportPage;
