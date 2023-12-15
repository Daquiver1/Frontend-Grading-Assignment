import React, { useState } from 'react';

const InstructorContactPage = () => {
  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [emailContent, setEmailContent] = useState('');

  const instructors = [
    {
      id: 1,
      name: 'David Nyarko',
      email: 'DavidNyarko@gmail.com',
     
    },
    {
      id: 2,
      name: 'Ria Smith',
      email: 'RiaSmith@gmail.com',
    },
    {
        id: 3,
        name: 'Lola Asare',
        email: 'LolaAsare@gmail.com',
      },
      {
        id: 4,
        name: 'Bruce Banner',
        email: 'BruceBanner@gmail.com',
      },
      {
        id: 5,
        name: 'Micheal Ablorh',
        email: 'MichealAblorh@gmail.com',
        Number: '0504556562',
      },
   
  ];

  const handleInstructorSelect = (instructor) => {
    setSelectedInstructor(instructor);
  };

  const handleEmailChange = (e) => {
    setEmailContent(e.target.value);
  };

  const handleSendEmail = () => {
    
    console.log(`Email sent to ${selectedInstructor.name}: ${emailContent}`);
    
  };

  return (
    <div className="container mx-auto my-8">
      <div className="grid grid-cols-2 gap-8">
        {/* Instructor List */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Instructors</h2>
          <ul>
            {instructors.map((instructor) => (
              <li
                key={instructor.id}
                className={`cursor-pointer p-2 border ${
                  selectedInstructor && selectedInstructor.id === instructor.id
                    ? 'bg-green-200'
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
          <div>
            <h2 className="text-2xl font-bold mb-4">{selectedInstructor.name}</h2>
            <p>Email: {selectedInstructor.email}</p>
            <p>Number: {selectedInstructor.number}</p>
            <div className="mt-4">
              <label htmlFor="emailContent" className="block text-gray-700 font-semibold mb-2">
                Email Content
              </label>
              <textarea
                id="emailContent"
                name="emailContent"
                value={emailContent}
                onChange={handleEmailChange}
                className="w-full p-2 border rounded focus:outline-none focus:border-green-400"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              onClick={handleSendEmail}
              className="mt-4 bg-green-400 text-white py-2 px-4 rounded hover:bg-green-300 focus:outline-none focus:shadow-outline-blue"
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
