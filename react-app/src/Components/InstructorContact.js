import React, { useState } from 'react';
import './InstructorContact.css';
import Navbar from './Navbar';
import Footer from './Footer';

const instructorsData = [
  { id: 1, name: 'Dwumfour Abdullai Abdul-Aziz', email: 'adwumfour@ug.edu.gh', courseCodes: ['DCIT203'] },
  { id: 2, name: 'Michael Agni Soli', email: 'jane.smith@example.com', courseCodes: ['DCIT205'] },
  { id: 3, name: 'Paul Nii Tachie Ammah', email: 'bob.johnson@example.com', courseCodes: ['STAT202', 'STAT203'] },
  { id: 4, name: 'Benjamin Ghansah', email: 'alice.davis@example.com', courseCodes: ['ENG101'] },
];

const InstructorContactPage = () => {
  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [emailContent, setEmailContent] = useState('');

  const handleInstructorSelect = (instructor) => {
    setSelectedInstructor(instructor);
    setEmailContent(`Dear ${instructor.name},\n\nI hope this email finds you well.`);
  };

  const handleEmailChange = (e) => {
    setEmailContent(e.target.value);
  };

  const handleSendEmail = () => {
    alert(`Simulating sending email to ${selectedInstructor.email}:\n\n${emailContent}`);
  };

  return (
    <>
    <Navbar />
    <div className="instructor-contact-page">
      <h1>Instructor Contact Page</h1>

      <section className="instructors-section">
        <h2>Instructors</h2>
        <ul>
          {instructorsData.map((instructor) => (
            <li key={instructor.id}>
              <div
                className={`instructor-card ${selectedInstructor?.id === instructor.id ? 'selected' : ''}`}
                onClick={() => handleInstructorSelect(instructor)}
              >
                <p className="instructor-name">{instructor.name}</p>
                <p className="instructor-email">{instructor.email}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {selectedInstructor && (
        <section className="contact-details-section">
          <h2>Contact Details</h2>
          <p>Name: {selectedInstructor.name}</p>
          <p>Email: {selectedInstructor.email}</p>
          <p>Courses: {selectedInstructor.courseCodes.join(', ')}</p>
        </section>
      )}

      {selectedInstructor && (
        <section className="send-email-section">
          <h2>Send Email</h2>
          <textarea
            className="email-textarea"
            value={emailContent}
            onChange={handleEmailChange}
            placeholder={`Type your email content here for ${selectedInstructor.name}`}
          />
          <button className="send-email-button" onClick={handleSendEmail}>
            Send Email
          </button>
        </section>
      )}

      <section className="passages-section">
      <h2>Passages</h2>
    <p>
        Welcome to the Instructor Contact Page! This page allows you to explore information about our
        dedicated instructors who play a vital role in shaping the learning experience.
    </p>
    <p>
        Instructors provide valuable insights, guidance, and support. They are here to assist you on your
        educational journey. Feel free to select an instructor, view their contact details, and even
        send a simulated email.
    </p>
    <p>
        Effective communication with instructors is essential for a successful academic experience.
        Whether you have questions, need clarification, or simply want to express your thoughts,
        our instructors are here to help.
    </p>
      </section>
    </div>
    <Footer />
    </>
  );
};

export default InstructorContactPage;
