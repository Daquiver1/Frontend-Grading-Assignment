// InstructorContactPage.js
import React, { useState } from 'react';

const InstructorContactPage = () => {
  const [instructors, setInstructors] = useState([
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
    { id: 3, name: 'Bob Johnson', email: 'bob.johnson@example.com' },
  ]);

  const [selectedInstructor, setSelectedInstructor] = useState(null);

  const handleSendEmail = () => {
    // For demonstration purposes, you can simulate sending an email
    if (selectedInstructor) {
      alert(`Simulating email sent to ${selectedInstructor.name} (${selectedInstructor.email})`);
    } else {
      alert('Please select an instructor before sending an email.');
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Instructor Contact</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* List of Instructors */}
        <div className="col-span-2 lg:col-span-3">
          <h2 className="text-lg font-semibold mb-4">Instructors</h2>
          <ul className="space-y-4">
            {instructors.map((instructor) => (
              <li key={instructor.id} className="bg-white p-4 rounded-md shadow-md">
                <h3 className="text-lg font-semibold mb-2">{instructor.name}</h3>
                <p className="text-gray-600">{instructor.email}</p>
                <button
                  className="btn mt-2 bg-blue-500 text-white hover:bg-blue-700"
                  onClick={() => setSelectedInstructor(instructor)}
                >
                  Send Email
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Email Form */}
        {selectedInstructor && (
          <div className="bg-white p-6 rounded-md shadow-md col-span-2 md:col-span-1">
            <h2 className="text-lg font-semibold mb-4">Send Email</h2>
            <p className="mb-4">
              You are sending an email to {selectedInstructor.name} ({selectedInstructor.email}).
            </p>
            <textarea
              placeholder="Compose your message..."
              className="w-full px-3 py-2 border rounded shadow appearance-none h-32 resize-none mb-4"
            ></textarea>
            <button
              className="btn bg-blue-500 text-white hover:bg-blue-700"
              onClick={handleSendEmail}
            >
              Send Email
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default InstructorContactPage;
