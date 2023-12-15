import React from 'react';
import Styles from './InstructorContacts.module.css'

const InstructorContactsPage = () => {
  const instructors = [
    { id: 1, name: 'Prof. John', email: 'john@example.com' },
    { id: 2, name: 'Prof. James', email: 'james@example.com' },
    { id: 3, name: 'Prof. Hasana', email: 'hasana@example.com' },
    { id: 3, name: 'Prof. Kwadwo', email: 'kwadwo@example.com' },
    { id: 3, name: 'Prof. Hnason', email: 'hanson@example.com' },
    { id: 3, name: 'Prof. Philomina', email: 'mina@example.com' },
    { id: 3, name: 'Prof. Hussien', email: 'husien@example.com' },
    { id: 3, name: 'Prof. Johnson', email: 'johnson@example.com' },
    { id: 3, name: 'Prof. Courage', email: 'rage@example.com' },
    { id: 3, name: 'Prof. Jonas', email: 'nasjo@example.com' },
    { id: 3, name: 'Prof. Grace', email: 'grace@example.com' },
    { id: 3, name: 'Prof. Daniel', email: 'danny@example.com' },
    { id: 3, name: 'Prof. Williams', email: 'williams@example.com' },
    
  ];

  const handleSendEmail = (instructor) => {
    
    alert(`Email sent to ${instructor.name} (${instructor.email})`);
  };

  return (
    <div className="instructor-contacts-container">
      <h2>Instructor Contacts</h2>

      <ul>
        {instructors.map((instructor) => (
          <li key={instructor.id}>
            <strong>{instructor.name}</strong>
            <p>Email: {instructor.email}</p>
            <button onClick={() => handleSendEmail(instructor)}>
              Send Email
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InstructorContactsPage;
