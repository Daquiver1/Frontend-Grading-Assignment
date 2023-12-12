
import React, { useState } from 'react';
import '../styles/contact.css';

const instructorsData = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
  },
  // Add more instructors as needed
];

const InstructorContactPage = () => {
  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [emailContent, setEmailContent] = useState('');

  const handleInstructorSelect = (instructor) => {
    setSelectedInstructor(instructor);
  };

  const handleEmailChange = (e) => {
    setEmailContent(e.target.value);
  };

  const handleSendEmail = () => {
    // You can implement the logic to simulate sending an email here
    console.log(`Email sent to ${selectedInstructor.name}: ${emailContent}`);
  };

  return (
    <div className="instructor-contact-page">
      <div className="instructor-list">
        <h2>Instructors</h2>
        <ul>
          {instructorsData.map((instructor) => (
            <li key={instructor.id} onClick={() => handleInstructorSelect(instructor)}>
              {instructor.name}
            </li>
          ))}
        </ul>
      </div>
      {selectedInstructor && (
        <div className="email-form">
          <h2>Contact {selectedInstructor.name}</h2>
          <p>Email: {selectedInstructor.email}</p>
          <textarea
            placeholder="Type your message here..."
            value={emailContent}
            onChange={handleEmailChange}
          />
          <button onClick={handleSendEmail}>Send Email</button>
        </div>
      )}
    </div>
  );
};

export default InstructorContactPage;