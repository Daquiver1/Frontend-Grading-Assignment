import React, { useState } from "react";

const InstructorContact = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const instructors = [
    { id: 1, name: "Micheal Soli", email: "michealsoli@gmail.com" },
    { id: 2, name: "Daquiver Asare", email: "daqasare@gmail.com" },
  ];

  const handleSendEmail = (instructor) => {
    console.log(`Simulated email sent to ${instructor.email}`);
    setSuccessMessage(`Email sent to ${instructor.email}`);
  };

  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold mb-4 text-white">Instructor Contact</h2>
      <div className="max-w-md mx-auto text-white">
        <ul>
          {instructors.map((instructor) => (
            <li key={instructor.id} className="mb-4">
              <strong>{instructor.name}:</strong>
              <br />
              Email: {instructor.email}
              <button
                className="bg-blue-500 text-white py-1 px-2 rounded-md ml-2 hover:bg-blue-600"
                onClick={() => handleSendEmail(instructor)}
              >
                Send Email
              </button>
            </li>
          ))}
        </ul>
      </div>
      {successMessage && (
        <p className="text-green-500 mt-4">{successMessage}</p>
      )}

<br />  <br />  <br />  <br />  <br />  <br />  <br />   <br />  <br />  <br />  <br /> 
      <footer className="text-white py-4 text-center">
        
        <p>&copy; 2023 Thelsare. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default InstructorContact;
