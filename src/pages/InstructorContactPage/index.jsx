// InstructorContactPage.js
import React, { useState } from 'react';
import DashboardLayout from '../../components/shared/DashboardLayout';

const instructors = [
  { id: 1, name: 'Mark Atta', email: 'mark.atta@gmail.com' },
  { id: 2, name: 'Mr Solly', email: 'solly.smith@gmail.com' },
  // Add more instructors as needed
];

const InstructorContactPage = () => {
  const [selectedInstructor, setSelectedInstructor] = useState(null);

  const handleInstructorClick = (instructor) => {
    setSelectedInstructor(instructor);
  };

  const handleSendEmail = () => {
    if (selectedInstructor) {
      alert(`Email sent to ${selectedInstructor.name} (${selectedInstructor.email})`);
    }
  };

  return (
    <DashboardLayout title={"/Instructor Contact"}>
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Instructor Contact Page</h1>
      <p>click lecturer's name to send email</p>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <ul>
            {instructors.map((instructor) => (
              <li
                key={instructor.id}
                className={`cursor-pointer p-2 ${
                  selectedInstructor && selectedInstructor.id === instructor.id
                    ? 'bg-blue-500 text-white'
                    : 'hover:bg-gray-200'
                }`}
                onClick={() => handleInstructorClick(instructor)}
              >
                {instructor.name}
              </li>
            ))}
          </ul>
        </div>
        <div>
          {selectedInstructor && (
            <div>
              <h2 className="text-xl font-bold mb-2">{selectedInstructor.name}</h2>
              <p>Email: {selectedInstructor.email}</p>
              <button
                className="bg-blue-500 text-white py-2 px-4 mt-4 rounded hover:bg-blue-600"
                onClick={handleSendEmail}
              >
                Send Email
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
    </DashboardLayout>
  );
};

export default InstructorContactPage;
