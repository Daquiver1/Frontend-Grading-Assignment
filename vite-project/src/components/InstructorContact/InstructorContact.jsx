// InstructorContact.js
import React, { useState } from 'react';
import home1 from '../../assets/images/card1.jpg';
import home2 from '../../assets/images/card2.jpg';
import home3 from '../../assets/images/card3.jpg';

const InstructorContact = () => {
  // Sample data for instructors with images
  const instructors = [
    { id: 1, name: 'Nana Essel', email: 'essel@gmail.com', image: home1 },
    { id: 2, name: 'Pringles Jane', email: 'jane@gmail.com', image: home2 },
    { id: 3, name: 'Ewura Abena', email: 'abena@gmail.com', image: home3 },
    // Add more instructors as needed
  ];

  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [emailContent, setEmailContent] = useState('');

  const handleSendEmail = () => {
    // Simulate sending an email (you can customize this logic)
    alert(`Email sent to ${selectedInstructor.name}:\n${emailContent}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h2 className="text-2xl font-semibold mb-4">Instructor Contact</h2>

      {/* Instructor List */}
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {instructors.map((instructor) => (
          <li
            key={instructor.id}
            onClick={() => setSelectedInstructor(instructor)}
            className={`cursor-pointer bg-white p-4 rounded shadow-md ${
              selectedInstructor && selectedInstructor.id === instructor.id ? 'border-2 border-blue-500' : ''
            }`}
          >
            <img
              src={instructor.image}
              alt={instructor.name}
              className="w-full h-auto object-cover mb-2 rounded"
              style={{ maxHeight: '150px' }} // Set a maximum height to maintain aspect ratio
            />
            <h3 className="text-lg font-semibold">{instructor.name}</h3>
            <p className="text-gray-600">{instructor.email}</p>
          </li>
        ))}
      </ul>

      {/* Email Form */}
      {selectedInstructor && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Send Email to {selectedInstructor.name}</h3>
          <form className="max-w-md mx-auto bg-white p-4 rounded shadow-md">
            {/* Email Content */}
            <div className="mb-4">
              <label htmlFor="emailContent" className="block text-sm font-medium text-gray-700">
                Email Content
              </label>
              <textarea
                id="emailContent"
                value={emailContent}
                onChange={(e) => setEmailContent(e.target.value)}
                rows="4"
                className="mt-1 p-2 w-full border rounded"
              />
            </div>

            {/* Send Email Button */}
            <button
              type="button"
              onClick={handleSendEmail}
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Send Email
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default InstructorContact;
