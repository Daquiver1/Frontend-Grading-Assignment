import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './nav';
import MyFooter from './Footer';

// Sample instructor images (replace with actual image URLs)
const instructorImages = {
  'Dr. John Smith': 'https://placekitten.com/50/50', // Example cat image
  'Prof. Jane Doe': 'https://placekitten.com/50/51', // Another example cat image
  // Add more images for other instructors as needed
};

const InstructorContact = () => {
  // Sample data representing instructors and their contact details
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
    // Add more instructors as needed
  ]);

  // State to manage the selected instructor for email simulation
  const [selectedInstructor, setSelectedInstructor] = useState(null);

  // Function to handle the selection of an instructor for email simulation
  const handleInstructorSelect = (instructor) => {
    setSelectedInstructor(instructor);
  };

  // Function to simulate sending an email (mock-up)
  const sendEmail = () => {
    if (selectedInstructor) {
      // Simulated email logic (replace with actual email functionality)
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

        {/* Instructor List */}
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
