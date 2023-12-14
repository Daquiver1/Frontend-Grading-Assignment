import React, { useState } from 'react';
import Navbar from '../Navigation-Bar/navbar';
import Footer from '../Footer/Footer';

const InstructorContact = () => {
  const [instructors, setInstructors] = useState([
    { id: 1, name: 'Ferdinand Katsriku', email: ' fkatsriku@ug.edu.gh' },
    { id: 2, name: ' Dwumfour Abdullai Aziz', email: 'adwumfour@ug.edu.gh' },
    { id: 3, name: '  Mark Atta Mensah', email: 'mamensah@ug.edu.gh' },
  ]);

  const [selectedInstructor, setSelectedInstructor] = useState(null);

  const handleInstructorClick = (instructor) => {
    setSelectedInstructor(instructor);
  };

  const handleSendEmail = () => {
    if (selectedInstructor) {
      alert(`Simulated email sent to ${selectedInstructor.name} at ${selectedInstructor.email}`);
    } else {
      alert('Please select an instructor before sending an email.');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="instructor-contact-container">
        <h1><u>Instructor Contact Page</u></h1>
        <div className="instructor-list">
          <h3>Instructor List</h3>
          <ul>
            {instructors.map((instructor) => (
              <li key={instructor.id} onClick={() => handleInstructorClick(instructor)}>
                {instructor.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="selected-instructor">
          {selectedInstructor && (
            <>
              <h3>Contact Details</h3>
              <p>Name: {selectedInstructor.name}</p>
              <p>Email: {selectedInstructor.email}</p>
              <button onClick={handleSendEmail}>Send Simulated Email</button>
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InstructorContact;

