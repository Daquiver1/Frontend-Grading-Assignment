// ICP(INSTRUTOR CONTACT PAGE).js

import React, { useState } from 'react';
import './style.css'; // Import CSS file for styling

const ICP = () => {
  const [instructors] = useState([
    {
      id: 1,
      name: 'Brownberries',
      email: 'browwnberries@msn.com',
    },
    {
      id: 2,
      name: 'Esther',
      email: 'esther033@msn.com',
    },
    // Add more instructors as needed
  ]);

  const handleSendEmail = (instructorId) => {
    const selectedInstructor = instructors.find((instructor) => instructor.id === instructorId);
    // Simulated email sending (displaying in console)
    console.log(`Sending email to ${selectedInstructor.name} (${selectedInstructor.email})`);
    // You can add logic here to simulate sending emails or perform other actions
  };

  return (
    <div className="instructor-contact-container">
      <h1>Instructor Contact List</h1>

      <ul className="instructors-list">
        {instructors.map((instructor) => (
          <li key={instructor.id} className="instructor-item">
            <div className="instructor-details">
              <h2>{instructor.name}</h2>
              <p>Email: {instructor.email}</p>
            </div>
            <button onClick={() => handleSendEmail(instructor.id)}>Send Email</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ICP;
