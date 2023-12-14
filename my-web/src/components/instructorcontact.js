import React, { useState } from 'react';
import'../main.css'

const InstructorContact = () => {
  const [selectedInstructor, setSelectedInstructor] = useState('');


  const instructors = [
    { 
      name: 'Dr Jamal Deen Abdulai', 
      email: 'jamal.deen@university.edu',
      imageUrl: '/images/Dr Jamal Deen Abdulai.jpg' 
    },
    { 
      name: 'Prof. Mark Atta', 
      email: 'mark.atta@university.edu',
      imageUrl: '/images/markatta.jpeg'  
    },
   
  ];

  const handleEmailSend = (event) => {
    event.preventDefault();
    alert(`Email would be sent to ${selectedInstructor}`);
  };

  return (
    <div className="instructor-contact-page">
      <h2>Instructor Contact Details</h2>
      <ul>
        {instructors.map((instructor, index) => (
          <li key={index}>
            <img src={instructor.imageUrl} alt={instructor.name} className="instructor-image" />
            {instructor.name} - {instructor.email}
            <button onClick={() => setSelectedInstructor(instructor.email)}>
              Send Email
            </button>
          </li>
        ))}
      </ul>
      {selectedInstructor && (
        <form onSubmit={handleEmailSend}>
          <p>Sending email to: {selectedInstructor}</p>
          <textarea placeholder="Write your email here"></textarea>
          <button type="submit">Send Email</button>
        </form>
      )}
    </div>
  );
};

export default InstructorContact;
