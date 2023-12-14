import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './nav';
import MyFooter from './Footer';

const instructorImages = {
  'Dr. John Smith': 'https://placekitten.com/50/50', 
  'Prof. Jane Doe': 'https://placekitten.com/50/51', 

};

const InstructorContact = () => {
  const [instructors, setInstructors] = useState([
    {
      name: 'Dr. William Wales',
      email: 'wales.w@gmail.com',
      phone: '257019887',
    },
    {
      name: 'Prof. Mary Anne',
      email: 'anne.mae@gmail.com',
      phone: '2468101214',
    },
  ]);


  const [selectedInstructor, setSelectedInstructor] = useState(null);

  const handleInstructorSelect = (instructor) => {
    setSelectedInstructor(instructor);
  };

  const sendEmail = () => {
    if (selectedInstructor) {
      alert(`Email sent to ${selectedInstructor.name}`);
    } else {
      alert('Please select an instructor to send an email.');
    }
  };

  return (
    <div>
      <MyNavbar />
      <div className="container mt-5">
        <h1 className="mb-4">Instructor Contact</h1>

        {/* List for the Instructor */}
        <ul className="list-group mb-4">
          {instructors.map((instructor, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center"
              onClick={() => handleInstructorSelect(instructor)}
            >
              <div className="d-flex align-items-center">
                {instructorImages[instructor.name] && (
                  <img
                    src={instructorImages[instructor.name]}
                    alt={`${instructor.name}'s profile`}
                    className="rounded me-3"
                    style={{ width: '50px', height: '50px' }}
                  />
                )}
                <span>{instructor.name}</span>
              </div>
              <span className="badge bg-primary">Contact</span>
            </li>
          ))}
        </ul>

        {/* Selected Instructor Contact Details */}
        {selectedInstructor && (
          <div>
            <h2>Contact Details</h2>
            <p>
              <strong>Name:</strong> {selectedInstructor.name}
            </p>
            <p>
              <strong>Email:</strong> {selectedInstructor.email}
            </p>
            <p>
              <strong>Phone:</strong> {selectedInstructor.phone}
            </p>
          </div>
        )}

        {/* Email Simulation Button */}
        <button
          className="btn btn-primary mt-3"
          onClick={sendEmail}
          disabled={!selectedInstructor}
        >
          Send Simulated Email
        </button>
      </div>
      <MyFooter />
    </div>
  );
};

export default InstructorContact;