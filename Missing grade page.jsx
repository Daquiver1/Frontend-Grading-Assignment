// MissingGradeForm.js

import React from 'react';
import './MissingGradeForm.css'; // Import the CSS file for styling

const MissingGradeForm = () => {
  return (
    <div>
      <header>
        <h2>Report a Missing Grade</h2>
      </header>
      <nav>
        <a href="/">Home</a>
        <a href="/login">Login</a>
        <a href="/dashboard">Dashboard</a>
        <a href="/grade-report">Grade Report</a>
        <a href="/missing-grade-form">Report Missing Grade</a>
        <a href="/instructor-contact">Instructor Contact</a>
        <a href="/help-support">Help & Support</a>
      </nav>
      <main>
        <section>
          <p>
            Missing a grade? No worries! Use this form to report any grades that haven't made their way into your academic profile. We understand the importance of accurate records, and we're here to assist you in ensuring your grades are properly documented.
          </p>
          <p className="details">
            Instructions for Filling the Form:
          </p>
          <p>
            To report a missing grade, provide the following details about the course:
          </p>
          <ul>
            <li>Course Name</li>
            <li>Instructor Name</li>
            <li>Expected Grade</li>
            <li>Explanation (if needed)</li>
          </ul>
          <p>
            Once you've filled out the form, click the "Submit" button. Rest assured, this is a simulation, and your data won't be submitted. You'll receive a confirmation message to let you know we've got your back!
          </p>
          {/* Missing Grade Form */}
          <form>
            <label htmlFor="courseName">Course Name:</label>
            <input type="text" id="courseName" name="courseName" required />

            <label htmlFor="instructorName">Instructor Name:</label>
            <input type="text" id="instructorName" name="instructorName" required />

            <label htmlFor="expectedGrade">Expected Grade:</label>
            <input type="text" id="expectedGrade" name="expectedGrade" required />

            <label htmlFor="explanation">Explanation (if needed):</label>
            <textarea id="explanation" name="explanation" rows="4"></textarea>

            <button type="submit">Submit</button>
          </form>
          {/* End of Form */}
        </section>
      </main>
      <footer>
        <p>&copy; 2023 GradeTracker - Your Academic Companion</p>
      </footer>
    </div>
  );
};

export default MissingGradeForm;


