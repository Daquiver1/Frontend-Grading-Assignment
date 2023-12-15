// Contact.js

import React from 'react';
import Navbar from '../components/Navbar';
import Landing from './footer';
import './Contact.css'; // Import the CSS file

export const Contact = () => {
  // Sample instructor data
  const instructors = [
    { name: 'John Doe', email: 'john.doe@example.com' },
    { name: 'Jane Smith', email: 'jane.smith@example.com' },
    { name: 'Bob Johnson', email: 'bob.johnson@example.com' },
    { name: 'Alice Brown', email: 'alice.brown@example.com' },
    { name: 'Charlie Davis', email: 'charlie.davis@example.com' },
    { name: 'Eva Wilson', email: 'eva.wilson@example.com' },
    { name: 'Frank Miller', email: 'frank.miller@example.com' },
    // Add more instructor data as needed
  ];

  return (
    <>
      <Navbar />
      <h1 Style={{ backgroundColor: "#2b87c5"}}>Contact<span>Here</span></h1>
      <div>

        <h2 style={{textAlign:"center"}}>Instructors</h2>
        {/* Table of instructors */}
        <table>
          <thead>
            <tr>
              <th>Name of Instructor</th>
              <th>Email</th>
              <th>Send Email</th>
            </tr>
          </thead>
          <tbody>
            {instructors.map((instructor, index) => (
              <tr key={index}>
                <td>{instructor.name}</td>
                <td>{instructor.email}</td>
                <td><button onClick={() => handleSendEmail(instructor.email)}>Send Email</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Landing />
    </>
  );
};

// Mock function for handling "Send Email" button click
const handleSendEmail = (email) => {
  // Simulated email sending logic (replace with your desired behavior)
  alert(`Sending simulated email to: ${email}`);

};
