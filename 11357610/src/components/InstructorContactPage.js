// InstructorContactPage.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/booccccccctstrap.min.css';
import 'tailwindcss/tailwind.css';

const InstructorContactPage = () => {
  // Dummy data for instructors
  const instructorsData = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', officeHours: 'Mon, Wed: 10am - 12pm' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', officeHours: 'Tue, Thu: 2pm - 4pm' },
    // Add more instructors as needed
  ];

  const [searchTerm, setSearchTerm] = useState('');

  const handleEmailSimulation = (instructorName) => {
    // Your logic for simulating email sending goes here
    console.log(`Simulating email to ${instructorName}`);
  };

  return (
    <div className="container mx-auto my-8">
      {/* Search bar */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search by name or course"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 w-full border rounded-md"
        />
      </div>

      {/* List of instructors */}
      <div className="max-w-lg mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Instructors</h2>
        {instructorsData
          .filter((instructor) =>
            instructor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            instructor.email.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((instructor) => (
            <div key={instructor.id} className="mb-4 border p-4 rounded-md">
              <p className="text-xl font-semibold">{instructor.name}</p>
              <p>Email: {instructor.email}</p>
              <p>Office Hours: {instructor.officeHours}</p>
              <button
                onClick={() => handleEmailSimulation(instructor.name)}
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Send Email
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default InstructorContactPage;
