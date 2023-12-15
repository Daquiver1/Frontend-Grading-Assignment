
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './InstructorContactPage.css'; 
import 'tailwindcss/tailwind.css';

function InstructorContact() {
  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [emailSubject, setEmailSubject] = useState('');
  const [emailBody, setEmailBody] = useState('');
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const instructors = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
    { id: 3, name: 'Bob Johnson', email: 'bob.johnson@example.com' },
    // Add more instructors as needed
  ];

  const handleInstructorSelect = (instructor) => {
    setSelectedInstructor(instructor);
  };

  const handleEmailChange = (e) => {
    setEmailSubject(e.target.value);
  };

  const handleBodyChange = (e) => {
    setEmailBody(e.target.value);
  };

  const handleSendEmail = () => {
    // Perform any email sending logic (mock-up)
    setConfirmationMessage(`Email sent to ${selectedInstructor.name} successfully!`);
  };

  return (
    <div className="instructor-contact-page-container">
      <div className="instructor-list-container">
        <h1 className="text-4xl font-bold mb-4">Instructor Contact List</h1>
        <ul>
          {instructors.map((instructor) => (
            <li
              key={instructor.id}
              className={`cursor-pointer p-2 border border-gray-300 rounded-md ${
                selectedInstructor && selectedInstructor.id === instructor.id
                  ? 'bg-blue-500 text-white'
                  : ''
              }`}
              onClick={() => handleInstructorSelect(instructor)}
            >
              {instructor.name}
            </li>
          ))}
        </ul>
      </div>
      {selectedInstructor && (
        <div className="email-form-container">
          <h2 className="text-2xl font-bold mb-4">{`Contact ${selectedInstructor.name}`}</h2>
          <form className="w-full max-w-md">
            <div className="mb-4">
              <label htmlFor="emailSubject" className="block text-gray-700 text-sm font-bold mb-2">
                Subject:
              </label>
              <input
                type="text"
                id="emailSubject"
                value={emailSubject}
                onChange={handleEmailChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="emailBody" className="block text-gray-700 text-sm font-bold mb-2">
                Email Body:
              </label>
              <textarea
                id="emailBody"
                value={emailBody}
                onChange={handleBodyChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              ></textarea>
            </div>
            <button
              type="button"
              onClick={handleSendEmail}
              className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 focus:outline-none focus:shadow-outline-green active:bg-green-800"
            >
              Send Email
            </button>
          </form>
          {confirmationMessage && <p className="text-green-600 mt-4">{confirmationMessage}</p>}
        </div>
      )}
    </div>
  );
}

export default InstructorContact;