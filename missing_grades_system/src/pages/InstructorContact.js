// src/pages/InstructorContact.js
import React, { useState } from 'react';
import '../styles/instructorcontact.css';
import Navbar from '../components/Navbar'

function InstructorContact() {
  // State for form fields
  const [instructorName, setInstructorName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // List of instructors with contact details
  const instructors = [
    { name: 'Instructor 1', email: 'instructor1@example.com' },
    { name: 'Instructor 2', email: 'instructor2@example.com' },
    // Add more instructors as needed
  ];

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary validation or data processing here
    setIsSubmitted(true);
  };

  // Function to simulate sending an email
  const sendEmail = (instructorEmail) => {
    // Simulate sending email (replace with actual logic if needed)
    console.log(`Simulating email to ${instructorEmail}: ${message}`);
  };

  return (
    <div className="instructor-contact-page">
      <Navbar></Navbar>  
      <h1>Instructor Contact Page</h1>
      <div className="instructor-list">
        <h2>List of Instructors</h2>
        <ul>
          {instructors.map((instructor, index) => (
            <li key={index}>
              {instructor.name} - {instructor.email}
              <button onClick={() => sendEmail(instructor.email)}>
                Send Email
              </button>
            </li>
          ))}
        </ul>
      </div>

      <form onSubmit={handleSubmit}>
        <h2>Contact Form</h2>
        <label htmlFor="instructorName">Instructor Name:</label>
        <input
          type="text"
          id="instructorName"
          value={instructorName}
          onChange={(e) => setInstructorName(e.target.value)}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <button type="submit">Send Message</button>
      </form>

      {isSubmitted && <p>Message sent successfully!</p>}
    </div>
  );
}

export default InstructorContact;
