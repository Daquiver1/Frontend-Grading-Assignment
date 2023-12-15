// InstructorContactPage.js
import React from 'react';
import InstructorCard from '../components/InstructorCard';
import { instructors } from '../data/data';

const Contact = () => {

  const handleEmailClick = (instructorEmail, instructorName) => {
    // Simulate sending an email (for demonstration purposes)
    alert(`Sending email to ${instructorName} (${instructorEmail})`);
  };

  return (
    <div className="container mx-auto md:p-8 mt-8">
      <h2 className="text-3xl font-semibold mb-4">Instructor Contact Page</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {instructors.map((instructor, index) => (
          <InstructorCard
            key={index}
            {...instructor}
            index={index}
            onEmailClick={handleEmailClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Contact;
