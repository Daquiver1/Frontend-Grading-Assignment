
import React, { useState } from 'react';
import './InstructorContactPage.css';
import Footer from './Footer';
import Navbar from './Navbar';

const instructors = [
  { id: 1, name: 'Paul Nii Tackie Ammah', email: 'tackieammah@gmail.com' },
  { id: 2, name: 'Micheal Agni Soli', email: 'Agni.soli@gmail.com' },
  { id: 2, name: 'Aziz Dzumfour', email: 'Aziz.dzumfour@gamil.com' },
  { id: 2, name: 'Ben Bright Benuwa', email: 'Benuwa@gmail.com' },
  { id: 2, name: 'Ebenezer Owusu', email: 'ebenowusu@gmail.com' },
  { id: 2, name: 'Nana Assyne', email: 'Assyne@gmail.com' },
  { id: 2, name: 'Ralph Twum', email: 'ralph.twum@gmail.com' },
  
];

const InstructorContactPage = () => {
  const [selectedInstructor, setSelectedInstructor] = useState(instructors[0]);
  const [emailSubject, setEmailSubject] = useState('');
  const [emailBody, setEmailBody] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const handleInstructorChange = (e) => {
    const selectedId = parseInt(e.target.value);
    const selected = instructors.find((instructor) => instructor.id === selectedId);
    setSelectedInstructor(selected);
  };

  const sendEmail = () => {
    
    console.log(`To: ${selectedInstructor.email}`);
    console.log(`Subject: ${emailSubject}`);
    console.log(`Body: ${emailBody}`);
    console.log('Email sent successfully!');
    

    setEmailSent(true);
    setEmailSubject('');
    setEmailBody('');

    
    setTimeout(() => {
      setEmailSent(false);
    }, 3000);
  };

  return (
    <>
    <Navbar />
    <div className="instructor-container">
      <h1>Instructors</h1>

      <ul className="instructor-list">
        {instructors.map((instructor) => (
          <li key={instructor.id} className="instructor-list-item">
            {instructor.name} - {instructor.email}
          </li>
        ))}
      </ul>

      <div className="email-form">
        <h2>Send Email</h2>
        <label htmlFor="instructorSelect">Select Instructor:</label>
        <select id="instructorSelect" onChange={handleInstructorChange} value={selectedInstructor.id}>
          {instructors.map((instructor) => (
            <option key={instructor.id} value={instructor.id}>
              {instructor.name}
            </option>
          ))}
        </select>

        <label htmlFor="emailSubject">Subject:</label>
        <input
          type="text"
          id="emailSubject"
          value={emailSubject}
          onChange={(e) => setEmailSubject(e.target.value)}
          required
        />

        <label htmlFor="emailBody">Message:</label>
        <textarea
          id="emailBody"
          value={emailBody}
          onChange={(e) => setEmailBody(e.target.value)}
          rows="4"
          required
        ></textarea>

        <button type="button" onClick={sendEmail}>
          Send Email
        </button>

        {emailSent && <p className="confirmation-message">Email sent successfully!</p>}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default InstructorContactPage;
