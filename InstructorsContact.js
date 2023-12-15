import React, { useState } from 'react';
import './InstructorContact.css';

const instructorsData = [
  { id: 1, name: 'Mr.Michael Agbo Soli', email: 'john.doe@example.com' },
  { id: 2, name: 'Prof. Ferdinard Katsriku', email: 'jane.smith@example.com'},
  { id: 3, name: 'Dr. Solomon Mensah', email: 'john.doe@example.com' },
  { id: 4, name: 'Mr. Mark Atta Mensah', email: ' mamensah@ug.edu.gh'},
  { id: 5, name: 'Dr. Seth Sarfo', email: 'john.doe@example.com' },
  { id: 6, name: 'Dr. Enoch Sakyi Yeboah', email: 'jane.smith@example.com'},
  { id: 7, name: 'Dwumfour Abdullai Aziz', email: 'adwumfour@ug.edu.gh' },
  { id: 8, name: 'Dr. Nkansah Morgan', email: 'jane.smith@example.com'},
  { id: 9, name: 'Dr. Albert Wornyo', email: 'john.doe@example.com' },
  { id: 10, name: 'Mrs. Afful Gloria', email: 'jane.smith@example.com'},
  { id: 11, name: 'John Doe', email: 'john.doe@example.com' },
  { id: 12, name: 'Jane Smith', email: 'jane.smith@example.com'},
// Add more instructors as needed
];

const InstructorContact = () => {
const [selectedInstructor, setSelectedInstructor] = useState(null);
const [emailContent, setEmailContent] = useState('');

const handleInstructorClick = (instructor) => {
  setSelectedInstructor(instructor);
};

const handleSendEmail = () => {
  // Simulated email sending logic
  if (selectedInstructor) {
    alert(`Simulated email sent to ${selectedInstructor.name} with content: ${emailContent}`);
  } else {
    alert('Please select an instructor before sending an email.');
  }
};

return (
  <div className="instructor-contact-container">
    <div className="instructor-list">
      <h2>Instructors</h2>
      <ul>
        {instructorsData.map((instructor) => (
          <li key={instructor.id} onClick={() => handleInstructorClick(instructor)}>
            {instructor.name}
          </li>
        ))}
      </ul>
    </div>

    <div className="email-section">
      <h2>Email</h2>
      {selectedInstructor ? (
        <>
          <p>Contact: {selectedInstructor.email}</p>
          <textarea
            placeholder="Type your email content here..."
            value={emailContent}
            onChange={(e) => setEmailContent(e.target.value)}
          ></textarea>
          <button onClick={handleSendEmail}>Send Email</button>
        </>
      ) : (
        <p>Select an instructor to view contact details and send an email.</p>
      )}
    </div>
  </div>
);
};

export default InstructorContact;
