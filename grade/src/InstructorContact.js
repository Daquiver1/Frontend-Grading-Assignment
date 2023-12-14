import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './nav';
import MyFooter from './MyFooter';
import './App.css'


const instructorImages = {
  'John Venn': process.env.PUBLIC_URL + '/images/john.jpeg',
  'Sir Isaac Netwon': process.env.PUBLIC_URL + '/images/isaac.jpeg',
  'Albert Einstein': process.env.PUBLIC_URL + '/images/albert.jpeg',
};

const InstructorContact = () => {

  const [instructors, setInstructors] = useState([
    {
      name: 'John Venn',
      email: 'jv@st.ug.edu.gh',
      phone: '+233 20 192 9434',
    },
    {
      name: 'Sir Isaac Netwon',
      email: 'gravitionalpull@forces.com',
      phone: '+233 24 0092541',
    },
    {
      name: 'Albert Einstein',
      email: 'generalrealativty@photoelectriceffect.com',
      phone: '+47 455 61 774',
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
      
      

    
    <div className="container main mt-5">
      <h1 className="mb-4">Instructor Contact</h1>

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

      {selectedInstructor && (
        <div className='space'>
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
