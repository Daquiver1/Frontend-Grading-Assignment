import React from "react";
import "./help.css";
import Header from './Header';


const HelpAndSupportPage = () => {
  return (
    <div className="help-page">
    <Header />
      <h1>Help and Support Page</h1>
      <p>If you have any trouble, please follow these step:</p>
      <ol>
        <li>
          Check your email for any notifications from the school administration.
        </li>
        <li>Contact your course instructor or academic advisor.</li>
        <li>
          If the issue persists, fill out the form below to report the issue.
        </li>
      </ol>
      <form className="report-form">
        <label htmlFor="studentName">Student Name:</label>
        <input type="text" id="studentName" name="studentName" />

        <label htmlFor="courseCode">Course Code:</label>
        <input type="text" id="courseCode" name="courseCode" />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default HelpAndSupportPage;
