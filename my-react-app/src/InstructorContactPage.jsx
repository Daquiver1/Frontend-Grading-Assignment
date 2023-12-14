// InstructorContactPage.jsx

import React, { useState } from 'react';
import './InstructorContactPage.css';

function InstructorContactPage() {
  const [selectedInstructor, setSelectedInstructor] = useState(null);

  const instructors = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Alex Johnson', email: 'alex@example.com' },
    // Add more instructors as needed
  ];

  const handleEmail = () => {
    if (selectedInstructor) {
      // Simulated email logic - you can customize this as needed
      alert(`Email sent to ${selectedInstructor.name} (${selectedInstructor.email})`);
    } else {
      alert('Please select an instructor first.');
    }
  };

  return (
    <div className="instructor-contact-container">
      <h1 className="page-title">Instructor Contact Page</h1>

      <div className="content">
        <div className="instructor-list">
          <h2>Instructors</h2>
          <ul>
            {instructors.map(instructor => (
              <li key={instructor.id}>
                <button onClick={() => setSelectedInstructor(instructor)}>
                  {instructor.name}
                </button>
                <span>{instructor.email}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="email-section">
          <h2>Email Instructor</h2>
          <button onClick={handleEmail}>Send Email</button>
        </div>
      </div>
    </div>
  );
}

export default InstructorContactPage;
