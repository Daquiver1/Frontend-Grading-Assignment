// InstructorContact.js
import React from 'react';
import './instructor.css'; 

const instructorData = [
  { id: 1, name: 'John Doe', email: 'john.doe@gmail.com' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@gmail.com' },
  { id: 3, name: 'Robert Johnson', email: 'robert.johnson@gmail.com' },
  { id: 4, name: 'Daniel Smith', email: 'daniel.smith@gmail.com' },
  { id: 5, name: 'Robert Obed', email: 'robert.obed@gmail.com' },
  { id: 6, name: 'Believe Johnson', email: 'believe.johnson@gmail.com' },
];

const InstructorContact = () => {
  const handleEmailClick = (email) => {
    // Simulate opening the default email client with a pre-filled email
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="contact-list">
      <div className="contact-list-header">
        <h3>Name</h3>
        <h3>Email</h3>
      </div>
      <div className="contact-list-body">
        {instructorData.map((instructor) => (
          <div key={instructor.id} className="contact-item">
            <p className="contact-name">{instructor.name}</p>
            <button className="contact-email" onClick={() => handleEmailClick(instructor.email)}>
              {instructor.email}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstructorContact;
