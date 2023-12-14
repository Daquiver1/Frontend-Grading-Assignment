import React, { useState, useEffect } from 'react';
import './InstructorContactPage.css'

const InstructorContactPage = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
   
    const simulatedInstructors = [
      { id: 1, name: 'Math 223', email: 'seba@gmail.com' },
      { id: 2, name: 'Dcit 201', email: 'tackie@gmail.com' },
      { id: 3, name: 'Dcit 205', email: 'soli@gmail.com' },
      { id: 4, name: 'Dcit 203', email: 'dzizi@gmail.com' },
      { id: 5, name: 'Dcit 207', email: 'dr@gmail.com' },
      { id: 6, name: 'CBAS', email: 'das@gmail.com' },
     
    ];

    setInstructors(simulatedInstructors);
  }, []);

  const handleEmail = (instructorEmail) => {
    // Simulated email sending logic - replace with your actual email sending logic
    console.log(`Email sent to ${instructorEmail}`);
    alert(`Email sent to ${instructorEmail}`);
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-4xl font-bold mb-4">Instructor Contact</h1>

      {instructors.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {instructors.map((instructor) => (
            <li key={instructor.id} className="mb-4">
              <h2 className="text-2xl font-bold">{instructor.name}</h2>
              <p>Email: {instructor.email}</p>
              <button
                type="button"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-2"
                onClick={() => handleEmail(instructor.email)}
              >
                Send Email
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InstructorContactPage;
