import React, { useState } from 'react';
import NavBar from './NavBar';

const InstructorContactPage = () => {
  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [message, setMessage] = useState('');

  const instructors = [
    {
      id: 1,
      name: 'John Doe',
      email: 'johndoe@example.com',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'janesmith@example.com',
    },
    // Add more instructors as needed
  ];

  const handleInstructorClick = (instructor) => {
    setSelectedInstructor(instructor);
    setMessage('');
  };

  const handleSendMessage = () => {
    console.log(`Sending message to ${selectedInstructor.name}\n${message}`);
    setMessage('');
  };

  return (
    <div>
      <NavBar />
      <h1>Instructor Contact Page</h1>
      <div>
        <h2>Instructors:</h2>
        <ul>
          {instructors.map((instructor) => (
            <li key={instructor.id}>
              <button onClick={() => handleInstructorClick(instructor)}>
                {instructor.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {selectedInstructor && (
        <div>
          <h2>Contact {selectedInstructor.name}:</h2>
          <p>Email: {selectedInstructor.email}</p>

          <h3>Send Message:</h3>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            cols={50}
          ></textarea>
          <button onClick={handleSendMessage}>Send</button>
        </div>
      )}
    </div>
  );
};

export default InstructorContactPage;