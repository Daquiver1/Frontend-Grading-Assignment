// InstructorContactList.js
import React from 'react';
import '../pages/instructor.css';

const instructorData = [
  { id: 1, name: 'John Doe', email: 'john.doe@gmail.com' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@gmail.com' },
  { id: 3, name: 'Robert Johnson', email: 'robert.johnson@gmail.com' },
  { id: 4, name: 'Daniel Smith', email: 'daniel.smith@gmail.com' },
  { id: 5, name: 'Robert Obed', email: 'robert.obed@gmail.com' },
  { id: 6, name: 'Believe Johnson', email: 'believe.johnson@gmail.com' },
  
  ];

const InstructorContactList = () => {
  const handleEmailClick = (email) => {
    // Simulate opening the default email client with a pre-filled email
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="instructor-contact-list">
      <ul>
        {instructorData.map((instructor) => (
          <li key={instructor.id}>
            <div className="instructor-info">
              <span className="instructor-name">{instructor.name}</span>
              <span className="instructor-email" onClick={() => handleEmailClick(instructor.email)}>
                {instructor.email}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InstructorContactList;
