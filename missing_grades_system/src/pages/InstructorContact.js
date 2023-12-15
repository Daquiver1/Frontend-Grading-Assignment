import React, { useState } from 'react';
import '../styles/instructorcontact.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function InstructorContact() {
  const [instructorName, setInstructorName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const instructors = [
    { name: 'Dwumfour Abdullai Abdul-Aziz', email: 'adwumfour@ug.edu.gh' },
    { name: 'Mark Atta Mensah', email: 'mamensah@ug.edu.gh' },
    { name: 'Dr. Kenneth Dadedzi ', email: 'kdadedzi@ug.edu.gh' },
    { name: 'Mrs. G. A. Botchway', email: 'gaantwi@ug.edu.gh' },

  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const sendEmail = (instructorEmail) => {
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
           <li key={index} className="instructor-item">
           <div>
             <span className="instructor-name">{instructor.name}</span>
             <span className="instructor-email">{instructor.email}</span>
           </div>
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
      <Footer />
    </div>
  );
}

export default InstructorContact;
