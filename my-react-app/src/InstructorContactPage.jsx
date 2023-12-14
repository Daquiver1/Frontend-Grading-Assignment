// InstructorContactPage.jsx

import React, { useState } from 'react';
import './InstructorContactPage.css';
import { Link } from 'react-router-dom';
function InstructorContactPage() {
  const [selectedInstructor, setSelectedInstructor] = useState(null);

  const instructors = [
    { id: 1, name: 'Dwumfour Abdullai Abdul-Aziz', email: 'Aziz@gmail.com' },
    { id: 2, name: 'Michael Agbo Tettey Soli', email: 'Soli@gmail.com' },
    { id: 3, name: 'Mark Attah Mensah', email: 'Mark@gmail.com' },
    // Add more instructors as needed
  ];

  const handleEmail = () => {
    if (selectedInstructor) {
      // Simulated email logic - you can customize this as needed
      alert(`Email sent to ${selectedInstructor.name} (${selectedInstructor.email})`);
    } else {
      alert('Please select an instructor first.');
    }
  };

  return (
    <div className="instructor-contact-container">
    <div className="dropdown">
      <button className="dropdown-button">Menu</button>
      <div className="dropdown-content">
        <Link to="/" className="dropdown-item">Landing</Link>
        <Link to="/dashboard" className="dropdown-item">Dashboard</Link>
        <Link to="/GradeReport" className="dropdown-item">Grade Report</Link>
        <Link to="/MissingGradeForm" className="dropdown-item">Missing Grade Form</Link>
        <Link to="/InstructorContactPage" className="dropdown-item">Instructor Contact</Link>
        <Link to="/HelpAndSupport" className="dropdown-item">Help and Support</Link>
      </div>
    </div>
    <div className="instructor-contact-container">
      <h1 className="page-title">Instructor Contact Page</h1>

      <div className="content">
        <div className="instructor-list">
          <h2>Instructors</h2>
          <ul>
            {instructors.map(instructor => (
              <li key={instructor.id}>
                <button onClick={() => setSelectedInstructor(instructor)}>
                  {instructor.name}
                </button>
                <span>{instructor.email}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="email-section">
          <h2>Email Instructor</h2>
          <button onClick={handleEmail}>Send Email</button>
        </div>
      </div>
    </div>
    </div>
  );
}
export default InstructorContactPage;
