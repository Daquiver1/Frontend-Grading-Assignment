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
            <h3>How does grade reporting work?</h3>
            <p>
              Grade reporting in the application allows users to access and
              manage their academic grades. This feature enables students to
              easily monitor their performance and progress over time.
            </p>
          </div>
          <div className="FAQItem">
            <h3>How does grade reporting work?</h3>
            <p>
              Grade reporting in the application allows users to access and
              manage their academic grades. This feature enables students to
              easily monitor their performance and progress over time.
            </p>
          </div>
          <div className="FAQItem">
            <h3>How does grade reporting work?</h3>
            <p>
              Grade reporting in the application allows users to access and
              manage their academic grades. This feature enables students to
              easily monitor their performance and progress over time.
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
