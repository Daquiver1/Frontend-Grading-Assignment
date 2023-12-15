import React, { useState } from 'react';
import "./contactinstructor.css";

const ContactInstructor = () => {
  const [selectedInstructor, setSelectedInstructor] = useState(null);

 

const instructors = [
  {
    id: 1,
    name: 'Dr. John Doe',
    email: 'john.doe@staff.ug.edu.gh',
  },
  {
    id: 2,
    name: 'Prof. Jane Smith',
    email: 'jane.smith@staff.ug.edu.gh',
  },
  {
    id: 3,
    name: 'Dr. Michael Johnson',
    email: 'michael.johnson@staff.ug.edu.gh',
  },
  {
    id: 4,
    name: 'Prof. Emily Williams',
    email: 'emily.williams@staff.ug.edu.gh',
  },
  {
    id: 5,
    name: 'Dr. David Brown',
    email: 'david.brown@staff.ug.edu.gh',
  },
  
];




  const handleInstructorSelect = (instructor) => {
    setSelectedInstructor(instructor);
  };

  const handleSendEmail = () => {
    if (selectedInstructor) {
      // Simulate sending an email (you can add more functionality here)
      alert(`Email sent to ${selectedInstructor.name} at ${selectedInstructor.email}`);
    } else {
      alert('Please select an instructor before sending an email.');
    }
  };

  return (
    <div className="instructor-contact-container">
      <h2>Instructor Contact</h2>

      <div className="instructor-list">
        <ul>
          {instructors.map((instructor) => (
            <li key={instructor.id} onClick={() => handleInstructorSelect(instructor)}>
              {instructor.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="selected-instructor">
        {selectedInstructor && (
          <div>
            <h3>{selectedInstructor.name}</h3>
            <p>Email: {selectedInstructor.email}</p>
          </div>
        )}
      </div>

      <div className="send-email-button">
        <button onClick={handleSendEmail}>Send Email</button>
      </div>
    </div>
  );
};

export default ContactInstructor;
