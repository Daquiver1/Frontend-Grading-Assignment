import React, { useState } from 'react';
import './contact.css';


const instructorsData = [
  { id: 1, name: 'Christian Afeti', email: 'john.doe@example.com' },
  { id: 2, name: 'Betty Smith', email: 'jane.smith@example.com' },
  { id: 3, name: 'Derrick Takyi', email: 'robert.johnson@example.com' },
  
];

const InstructorContactPage = () => {
  const [selectedInstructor, setSelectedInstructor] = useState(null);

  const handleEmailClick = (email) => {

    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="InstructorContactPage">
      <h1>Instructor Contact Page</h1>
      <div className="instructor-list">
        <div className="instructor-names">
          <h2>Instructors</h2>
          <ul>
            {instructorsData.map((instructor) => (
              <li
                key={instructor.id}
                className={selectedInstructor === instructor.id ? 'active' : ''}
                onClick={() => setSelectedInstructor(instructor.id)}
              >
                {instructor.name}
              </li>
            ))}
          </ul>
        </div>
        {selectedInstructor !== null && (
          <div className="instructor-details">
            <h2>Contact Details</h2>
            <p>
              <strong>Name:</strong> {instructorsData[selectedInstructor - 1].name}
            </p>
            <p>
              <strong>Email:</strong> {instructorsData[selectedInstructor - 1].email}
            </p>
            <button onClick={() => handleEmailClick(instructorsData[selectedInstructor - 1].email)}>
              Send Email
            </button>
          </div>
        )}
      </div>
      

    </div>
  );
};

export default InstructorContactPage;
