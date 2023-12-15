import React from 'react';
import { instructors } from '../data/instructors';

const InstructorContactPage = () => {
  const handleEmailSimulation = (instructorEmail) => {
    // Simulated email send (no real email, just a mock-up)
    alert(`Email sent to ${instructorEmail}`);
  }

  return (
    <div>
      <h2>Instructor Contact</h2>
      <ul>
        {instructors.map((instructor, index) => (
          <li key={index}>
            {instructor.name} - {instructor.email} 
            <button onClick={() => handleEmailSimulation(instructor.email)}>Send Email</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InstructorContactPage;
