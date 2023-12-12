// ContactInstructor.js
import React from 'react';

const ContactInstructor = () => {
  // Sample data (replace with actual data)
  const instructors = [
    { name: 'Dr. Smith', email: 'drsmith@example.com', officeHours: 'Monday 2-4 PM' },
    { name: 'Prof. Johnson', email: 'profjohnson@example.com', officeHours: 'Wednesday 10 AM-12 PM' },
    // Add more instructors as needed
  ];

  return (
    <div className="contact-instructor-container">
      <h1>Contact Instructor</h1>
      <div className="instructor-list">
        {instructors.map((instructor, index) => (
          <div key={index} className="instructor-info">
            <h2>{instructor.name}</h2>
            <p>Email: {instructor.email}</p>
            <p>Office Hours: {instructor.officeHours}</p>
            {/* Add course information or other details if needed */}
          </div>
        ))}
      </div>
      {/* Add email form and other elements as needed */}
    </div>
  );
};

export default ContactInstructor;
