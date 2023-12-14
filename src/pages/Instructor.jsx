import React from 'react';
import './Instructor.css';

const InstructorContactPage = () => {
  // Sample instructor contact information
  const instructors = [
    { name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
    { name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210' },
    // Add more instructor data as needed
  ];

  const handleSendEmail = (instructorEmail) => {
    // Logic to handle sending a simulated email
    // For now, let's just log the email sending action
    console.log(`Simulated email sent to: ${instructorEmail}`);
  };

  return (
    <div className="InstructorContact-container">
      <h1>Instructor Contact</h1>

      <div className="instructors-list">
        {instructors.map((instructor, index) => (
          <div className="instructor-card" key={index}>
            <h2>{instructor.name}</h2>
            <p>Email: {instructor.email}</p>
            <p>Phone: {instructor.phone}</p>
            <button onClick={() => handleSendEmail(instructor.email)}>Send Email</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstructorContactPage;
