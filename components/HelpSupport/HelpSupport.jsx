import React, { useState } from 'react';
import './HelpSupport.css'; // Import your CSS file for styling

const HelpSupport = () => {
  const [description, setDescription] = useState('');
  const [studentID, setStudentID] = useState('');
  const [instructorEmail, setInstructorEmail] = useState('');
  // Add more state variables for other relevant information

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your logic to handle the form submission goes here
    // You can use the form data (description, studentID, instructorEmail, etc.) as needed
    console.log('Form submitted:', { description, studentID, instructorEmail });
  };

  return (
    <div className="help-support">
      <h2>Help and Support</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="description">Description of the problem:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label htmlFor="studentID">Student ID:</label>
        <input
          type="text"
          id="studentID"
          value={studentID}
          onChange={(e) => setStudentID(e.target.value)}
        />

        <label htmlFor="instructorEmail">Instructor Email:</label>
        <input
          type="email"
          id="instructorEmail"
          value={instructorEmail}
          onChange={(e) => setInstructorEmail(e.target.value)}
        />
        {/* Add more input fields for other relevant information */}

        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
};

export default HelpSupport;
