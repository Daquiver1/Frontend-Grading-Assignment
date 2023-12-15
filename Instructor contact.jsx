import React from 'react';
import './InstructorContact.css'; // Import the corresponding CSS file

function InstructorContact() {
  return (
    <div className="instructor-contact container">
      <h2>Instructor Contact</h2>
      {/* List of instructors with contact details */}
      <ul>
        <li>
          <strong>Instructor 1:</strong> [Email Address]
        </li>
        <li>
          <strong>Instructor 2:</strong> [Email Address]
        </li>
        {/* ... */}
      </ul>
      {/* Option to send a simulated email to the instructor */}
      {/* Instructor selection dropdown, Subject input, Message input */}
      <form>
        <label htmlFor="instructorSelect">Select Instructor:</label>
        <select id="instructorSelect">
          {/* Populate with instructor options */}
          <option value="instructor1">Instructor 1</option>
          <option value="instructor2">Instructor 2</option>
          {/* ... */}
        </select>

        <label htmlFor="subject">Subject:</label>
        <input type="text" id="subject" />

        <label htmlFor="message">Message:</label>
        <textarea id="message"></textarea>

        <button type="submit">Send Email</button>
      </form>
      {/* Confirmation message */}
      <p>Your message has been sent successfully.</p>
    </div>
  );
}

export default InstructorContact;
