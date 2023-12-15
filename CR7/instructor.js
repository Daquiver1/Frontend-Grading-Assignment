import React, { useState } from 'react';

const InstructorContactPage = () => {
  const [instructors, setInstructors] = useState([
    { id: 1, name: 'Professor Daniel Lartey', email: 'prof.dan@example.com' },
    { id: 2, name: 'Dr. Johnson Amoah', email: 'dr.johnson@example.com' },
    
  ]);

  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [emailContent, setEmailContent] = useState('');

  const handleInstructorSelect = (instructor) => {
    setSelectedInstructor(instructor);
  };

  const handleEmailChange = (event) => {
    setEmailContent(event.target.value);
  };

  const handleSendEmail = () => {
    
    console.log(`Sending email to ${selectedInstructor.email} with content: ${emailContent}`);
  };

  return (
    <div>
      <h1>Instructor Contact Page</h1>
      <nav>
      <ul>
        <li><a href="dashboard">landingpage.js</a></li>
        <li><a href="login">loginpage.js</a></li>
        <li><a href="dashboard">dashboard.js</a></li>
        <li><a href="grade report">grade.js</a></li>
        <li><a href="missing grade form">missinggrade.js</a></li>
        <li><a href="help">help.js</a></li>
        <li><a href="instructor page">instructor.js</a></li>
      </ul>
    </nav>
      <section>
        <h2>List of Instructors</h2>
        <ul>
          {instructors.map((instructor) => (
            <li key={instructor.id} onClick={() => handleInstructorSelect(instructor)}>
              {instructor.name} - {instructor.email}
            </li>
          ))}
        </ul>
      </section>

      {selectedInstructor && (
        <section>
          <h2>Contact {selectedInstructor.name}</h2>
          <p>Email: {selectedInstructor.email}</p>

          <label htmlFor="emailContent">Email Content:</label>
          <textarea
            id="emailContent"
            name="emailContent"
            rows="4"
            value={emailContent}
            onChange={handleEmailChange}
            required
          ></textarea>

          <button onClick={handleSendEmail}>Send Email</button>
        </section>
      )}
    </div>
  );
};

export default InstructorContactPage;