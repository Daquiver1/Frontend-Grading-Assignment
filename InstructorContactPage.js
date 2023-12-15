import React from 'react';

const instructors = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
  // Add more instructors as needed
];

const InstructorContactPage = () => {
  const simulateEmail = (instructor) => {
    // Simulate sending an email (you can replace this with your desired functionality)
    alert(`Email sent to ${instructor.name} (${instructor.email})`);
  };

  return (
    <div>
      <h2>Instructor Contact</h2>
      <ul>
        {instructors.map((instructor) => (
          <li key={instructor.id}>
            <strong>{instructor.name}</strong>
            <br />
            Email: {instructor.email}
            <br />
            <button onClick={() => simulateEmail(instructor)}>Send Email</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InstructorContactPage;
