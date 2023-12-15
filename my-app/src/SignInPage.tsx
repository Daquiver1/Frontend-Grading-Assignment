// LandingPage.tsx
import React from 'react';
import './LandingPage.css'

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <header className="landing-header">
        <h1>Missing Grades? We're here to help!</h1>
      </header>

      <main className="landing-content">
        <p>
          If you are a student at a Ghanaian university and have missing grades,
          don't worry. Our team is dedicated to assisting you in resolving this
          issue.
        </p>

        <p>
          Please fill out the form below, and our support team will get in
          touch with you to address your concerns.
        </p>

        {/* Add a form for students to provide information about missing grades */}
        <form>
          <label htmlFor="fullName">Full Name:</label>
          <input type="text" id="fullName" name="fullName" required />

          <label htmlFor="studentID">Student ID:</label>
          <input type="text" id="studentID" name="studentID" required />

          <label htmlFor="courseCode">Course Code:</label>
          <input type="text" id="courseCode" name="courseCode" required />

          <label htmlFor="message">Additional Information:</label>
          <textarea id="message" name="message" rows={4} required />

          <button type="submit">Submit</button>
        </form>
      </main>

      <footer className="landing-footer">
        <p>&copy; 2023 University Support Services</p>
      </footer>
    </div>
  );
};

export default LandingPage;
