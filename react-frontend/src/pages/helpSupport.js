import React, { Component } from "react";
import "../styles/helpSupport.css";

class helpSupport extends Component {
  render() {
    return (
      <div className="HelpAndSupportPage">
        <h1>Help and Support</h1>

        <div className="FAQSection">
          <h2>FAQs</h2>
          <div className="FAQItem">
            <h3>How does grade reporting work?</h3>
            <p>
              Grade reporting in the application allows users to access and
              manage their academic grades. This feature enables students to
              easily monitor their performance and progress over time.
            </p>
          </div>
          <div className="FAQItem">
            <h3>What happens if my grade is recorded incorrectly?</h3>
            <p>
              If an incorrect grade is recorded, notify your instructor
              immediately. They will initiate the process for grade correction
              or rectification. Maintain documentation or evidence supporting
              your claim to facilitate the resolution.
            </p>
          </div>
          <div className="FAQItem">
            <h3>How can I access my course grades online?</h3>
            <p>
              Access to course grades might vary based on the learning
              management system (LMS) used by your institution. Log in to the
              designated platform and navigate to the grade or assessment
              section to view your current grades. If you encounter issues, seek
              technical support from your institution's IT department
            </p>
          </div>
          <div className="FAQItem">
            <h3>
              How long does it take for grades to be updated in the system?
            </h3>
            <p>
              Grades are typically updated within a specified timeframe by the
              instructor after an assessment. However, the exact duration can
              vary. If you have concerns about a specific grade, consult your
              course guidelines or contact your instructor for more information.
            </p>
          </div>
        </div>

        <div className="ContactForm">
          <h2>Contact Form</h2>
          <form>
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <label>
              Email:
              <input type="email" name="email" />
            </label>
            <label>
              Subject:
              <input type="text" name="subject" />
            </label>
            <label>
              Message:
              <textarea name="message"></textarea>
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default helpSupport;
