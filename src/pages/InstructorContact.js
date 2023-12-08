import React, { useState } from 'react';
import './InstructorContact.css';
import Footer from './Footer';

const InstructorContact = () => {
  const [instructors] = useState([
    { id: 1, name: 'Dr. Godfred Bright Hagan', email: 'gbhagan@staff.ug.edu.gh' },
    { id: 2, name: 'Dr. Martin Nana Yaw Hama Egblewogbe', email: 'mnyhegblewogbe@staff.ug.edu.gh' },
    { id: 3, name: 'Dr. Michael Tettey Soli', email: 'mtsoli@staff.ug.edu.gh' },
    { id: 4, name: 'Dr. Paul Nii Tackie', email: 'pntakie@staff.ug.edu.gh' },
    { id: 5, name: 'Dr. Dwumfour Abdullai Abdul-Aziz', email: 'adwumfour@ug.edu.gh' },
    { id: 6, name: 'Dr. Benoit Florent Sehba', email: 'bfsehba@staff.ug.edu.gh' },
    { id: 7, name: 'Dr. Alfred Ato Yankson', email: 'aayankson@staff.ug.edu.gh' },
    { id: 8, name: 'Dr. Peter Narh', email: 'pnarh@staff.ug.edu.gh' },
  ]);

  const handleSendEmail = (instructor) => {
    alert(`Simulated email sent to ${instructor.name} at ${instructor.email}`);
  };

  return (
    <body>
    <div className="instructor-list-container">
      <h2>Instructor List</h2>
      <ul>
        {instructors.map((instructor) => (
          <li key={instructor.id}>
            <div className="instructor-info">
              <span align = "left" className="instructor-name">{instructor.name}</span>
              <span align = "left" className="instructor-email">{instructor.email}</span>
            </div>
            <button class = 'email-button' onClick={() => handleSendEmail(instructor)}>Send Email</button>
          </li>
        ))}
      </ul>
    </div>
    <Footer position='relative' />
    </body>
  );
};

export default InstructorContact;
