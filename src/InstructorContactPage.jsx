

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './InstructorContactPage.css';

const instructorsData = [
  {
    name: 'Paul Nii Tackie Ammah',
    course: 'DCIT 201',
    contact: '0244658354',
    email: 'niitackieammah@gmail.com',
  },
  {
    name: 'Abdullai Aziz Dzumfuor',
    course: 'DCIT 203',
    contact: '050665478',
    email: 'azizdumfuor@gmail.com',
  },
  {
    name: 'Michael Agni Soli',
    course: 'DCIT 205',
    contact: '020547895',
    email: 'michaelsoli@gmail.com',
  },
  {
    name: 'Benjamin Ghansah',
    course: 'DCIT 209',
    contact: '0264581356',
    email: 'ghansahbenjamin@outlook.com',
  },
  {
    name: 'Ben Bright Benuwa',
    course: 'DCIT 207',
    contact: '0550419666',
    email: 'brightbenua@outlook.com',
  },
];

const InstructorContactPage = () => {
  const [selectedInstructor, setSelectedInstructor] = useState(null);

  const handleEmailSimulation = (instructor) => {
    // Simulate sending email (replace with actual email logic)
    console.log(`Email simulated to ${instructor.name} at ${instructor.email}`);
    setSelectedInstructor(instructor);
  };

  return (
    <div className="instructor-contact-page">
      <div className="instructor-contact-container">
        <h2>Instructor Contact Page</h2>

        <div className="instructor-list">
          <h3>Alphabetical List of Instructors</h3>
          <ul>
            {instructorsData.map((instructor, index) => (
              <li key={index}>
                <span>{instructor.name}</span>
                <span>{instructor.course}</span>
                <span>{instructor.contact}</span>
                <button onClick={() => handleEmailSimulation(instructor)}>Send Email</button>
              </li>
            ))}
          </ul>
        </div>

        {selectedInstructor && (
          <div className="email-simulation-message">
            <p>Email simulated to {selectedInstructor.name} at {selectedInstructor.email}</p>
          </div>
        )}

        <div className="navigation-links">
          <Link to="/dashboard">Go to Dashboard</Link>
          <Link to="/grade-report">Grade Report</Link>
          <Link to="/missing-grade-form">Missing Grade Form</Link>
          <Link to="/help-and-support">Help and Support</Link>
          {/* Add more navigation links as needed */}
        </div>
      </div>
    </div>
  );
};

export default InstructorContactPage;
