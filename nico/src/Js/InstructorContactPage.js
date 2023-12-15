// InstructorContact.js
import React, { useState } from 'react';
import '../Css/InstructorContactPage.css';
import SideNavBar from "./SideNavBar";

const InstructorContactPage = () => {
  // Simulated data (replace with actual data fetching logic)
  const instructors = [
    { name: 'Dr. Smith', email: 'dr.smith@gmail.com' },
    { name: 'Prof. Johnson', email: 'prof.johnson@gmail.com' },
    { name: 'Mr.Mark Atta', email: 'mr.mark@gmail.com' },
    { name: 'Prof. Kenneth', email: 'prof.kenneth@gmail.com' },
    { name: 'Dr. Michael', email: 'dr.michael@gmail.com' },
    { name: 'Mr. Aziz', email: 'mr.aziz@gmail.com' },
    { name: 'Mr. Paul', email: 'mr.paul@gmail.com' },
    { name: 'Mrs . Nancy', email: 'mrs.nancy@yahoo.com' },
    // Add more instructors as needed
  ];

  const [selectedInstructor, setSelectedInstructor] = useState('');
  const [emailContent, setEmailContent] = useState('');

  const handleChangeInstructor = (event) => {
    setSelectedInstructor(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmailContent(event.target.value);
  };

  const handleSendEmail = () => {
    // Simulate sending email (replace with actual email sending logic)
    console.log(`Sending email to ${selectedInstructor} with content: ${emailContent}`);
  };

  return (
    <div className="content">
    <SideNavBar />
    <div>
      <h2>Instructor Contact</h2>

      <label>
        Select Instructor:
        <select value={selectedInstructor} onChange={handleChangeInstructor}>
          <option value="">Select an Instructor</option>
          {instructors.map((instructor, index) => (
            <option key={index} value={instructor.name}>
              {instructor.name}
            </option>
          ))}
        </select>
      </label>

      {selectedInstructor && (
        <div className="instructor-details">
          <h3>{selectedInstructor}</h3>
          <p>Email: {instructors.find((i) => i.name === selectedInstructor)?.email}</p>

          <label>
            Email Content:
            <textarea value={emailContent} onChange={handleEmailChange} />
          </label>

          <button onClick={handleSendEmail}>Send Email</button>
        </div>
      )}
    </div>
    </div>
  );
};

export default InstructorContactPage;
