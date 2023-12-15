import React, { useState } from 'react';

const instructorsData = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    phone: '123-456-7890',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '987-654-3210',
  },
  // Add more instructor data as needed
];

const InstructorContactPage = () => {
  const [selectedInstructor, setSelectedInstructor] = useState(null);

  const handleEmailSimulate = (instructor) => {
    setSelectedInstructor(instructor);
    // Implement your simulated email logic here
    // You can log instructor email or perform any desired action
    console.log(`Simulating email to: ${instructor.email}`);
  };

  return (
    <div>
      <h2>Instructor Contact Page</h2>
      <ul>
        {instructorsData.map((instructor) => (
          <li key={instructor.id}>
            <h3>{instructor.name}</h3>
            <p>Email: {instructor.email}</p>
            <p>Phone: {instructor.phone}</p>
            <button onClick={() => handleEmailSimulate(instructor)}>Send Email</button>
          </li>
        ))}
      </ul>
      {selectedInstructor && (
        <p>Simulated email sent to: {selectedInstructor.email}</p>
      )}
    </div>
  );
};

export default InstructorContactPage;