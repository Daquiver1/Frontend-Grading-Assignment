import React from 'react';

const InstructorContactPage = () => {
  const instructors = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
  ];

  const sendEmail = (instructor) => {
    console.log(`Sending email to ${instructor.name} at ${instructor.email}`);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Instructor Contact Page</h1>
      <ul className="list-disc pl-4">
        {instructors.map((instructor) => (
          <li key={instructor.id} className="mb-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">{instructor.name}</h3>
                <p className="text-gray-600">{instructor.email}</p>
              </div>
              <button
                onClick={() => sendEmail(instructor)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Send Email
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InstructorContactPage;
