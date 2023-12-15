import React from 'react';
import '../components/styles/contact.css';

const InstructorContact = () => {
  return (
    <div className="instructor-contact-container">
      <h2>Instructor Contact</h2>
      <div className="instructors-container">
 
        <div className="instructor">
          <h3>Prof. Elvis Amponsah </h3>
          <p>Email: elvisamponsah@gmail.com</p>
          <button>Send Email</button>
        </div>
        <div className="instructor">
          <h3>Prof. Ama Smith</h3>
          <p>Email: ama.smith@gmail.com</p>
          <button>Send Email</button>
        </div>
      </div>
    </div>
  );
};

export default InstructorContact;