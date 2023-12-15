import React, { useState } from 'react';

const InstructorContact = () => {
  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [emailContent, setEmailContent] = useState('');

  const instructors = [
    { id: 1, name: 'Dr. Soli', email: 'dr.soli@gmail.com' },
    { id: 2, name: 'Prof. Kastriku', email: 'prof.kastriku@gmail.com' },
    { id: 3, name: 'Mr. Aziz', email: 'mr.aziz@gmail.com' },
    // Add more instructors as needed
  ];

  const handleEmailChange = (e) => {
    setEmailContent(e.target.value);
  };

  const handleSendEmail = () => {
    if (selectedInstructor) {
      // Simulated email sending logic
      alert(`Email sent to ${selectedInstructor.name} (${selectedInstructor.email}):\n${emailContent}`);
    }
  };

  const handleInstructorClick = (instructor) => {
    if (selectedInstructor && selectedInstructor.id === instructor.id) {
      // If clicking on the same instructor, reset email content
      setSelectedInstructor(null);
      setEmailContent('');
    } else {
      // If clicking on a different instructor, set the selected instructor
      setSelectedInstructor(instructor);
      // You can choose whether to keep the existing email content or reset it
      // setEmailContent(''); // Uncomment this line to reset email content
    }
  };

  return (
    <div>
      <header className="text-black text-center py-4">
        <h1 className="text-3xl font-extrabold">Instructors</h1>
      </header>

      <div className="container mx-auto p-6">
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-bold mb-4">List of Instructors</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {instructors.map((instructor) => (
              <div
                key={instructor.id}
                className={`p-4 border rounded-md cursor-pointer ${
                  selectedInstructor && selectedInstructor.id === instructor.id ? 'border-blue-700' : 'border-gray-300'
                }`}
                onClick={() => handleInstructorClick(instructor)}
              >
                <h3 className="text-xl font-semibold">{instructor.name}</h3>
                <p className="text-gray-600">{instructor.email}</p>
              </div>
            ))}
          </div>

          {selectedInstructor && (
            <div className="mt-6">
              <h2 className="text-2xl font-bold mb-4">Send Simulated Email</h2>

              <div className="mb-4">
                <label htmlFor="emailContent" className="block text-sm font-semibold text-gray-600">Email Content:</label>
                <textarea
                  id="emailContent"
                  value={emailContent}
                  onChange={handleEmailChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  rows="4"
                />
              </div>

              <button
                onClick={handleSendEmail}
                className="bg-blue-100 text-black py-2 px-4 rounded-md hover:bg-white focus:outline-none focus:border-blue-800 focus:ring focus:ring-blue-200 font-semibold"
              >
                Send Email to {selectedInstructor.name}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InstructorContact;
