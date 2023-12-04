import React from 'react';
import './Instructor.css';
const InstructorContact = () => {
  // Sample instructor contact information
  const instructors = [
    { name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
    { name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210' },
    // Add more instructor data as needed
  ];

  return (
    <div className="instructor-contact-container">
      <h1>Instructor Contact</h1>
      <div className="instructor-list">
        {instructors.map((instructor, index) => (
          <div className="instructor-card" key={index}>
            <h2>{instructor.name}</h2>
            <p>Email: {instructor.email}</p>
            <p>Phone: {instructor.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstructorContact;
