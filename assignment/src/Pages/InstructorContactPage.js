

import React, { useState } from 'react';
import Navbar from '../Components/Navbar';

const InstructorContactPage = () => {
  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [emailContent, setEmailContent] = useState('');
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const instructors = [
    { id: 1, name: 'Dr. Smith', email: 'drsmith@example.com' },
    { id: 2, name: 'Prof. Johnson', email: 'profjohnson@example.com' },
    { id: 3, name: 'Dr. Williams', email: 'drwilliams@example.com' },

  ];

  const handleEmailChange = (e) => {
    setEmailContent(e.target.value);
  };

  const handleSendEmail = () => {
    if (selectedInstructor && emailContent) {
      setConfirmationMessage(`Email sent to ${selectedInstructor.name}: ${emailContent}`);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <section className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-4 text-purple-600">Instructor Contact</h1>
          <p className="text-lg text-gray-600">Contact your instructors and send them an email.</p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {instructors.map((instructor) => (
            <div
              key={instructor.id}
              className={`p-4 border rounded-md cursor-pointer ${
                selectedInstructor && selectedInstructor.id === instructor.id
                  ? 'bg-purple-100 border-purple-500'
                  : 'hover:bg-purple-100'
              }`}
              onClick={() => setSelectedInstructor(instructor)}
            >
              <h3 className="text-xl font-semibold mb-2 text-purple-700">{instructor.name}</h3>
              <p className="text-gray-700">{instructor.email}</p>
            </div>
          ))}
        </div>

        {selectedInstructor && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4 text-purple-600">Send Email</h2>
            <textarea
              value={emailContent}
              onChange={handleEmailChange}
              rows="4"
              className="w-full p-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:border-purple-500"
              placeholder={`Compose your email to ${selectedInstructor.name}...`}
            ></textarea>
            <button
              onClick={handleSendEmail}
              className="bg-purple-500 text-white px-6 py-3 rounded-md hover:bg-purple-700 focus:outline-none"
            >
              Send Email
            </button>
          </div>
        )}

        {confirmationMessage && (
          <div className="mt-8 p-4 bg-green-100 text-green-700 rounded-md">{confirmationMessage}</div>
        )}
      </div>
    </div>
  );
};

export default InstructorContactPage;
