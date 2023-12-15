// src/InstructorContactPage.js
import React from 'react';
import Layout from './Layout';
import './InstructorContactPage.css';

const instructors = [
  { name: 'Dr. Smith', email: 'dr.smith@dcs.ug.edu' },
  { name: 'Prof. Johnson', email: 'prof.johnson@dcs.ug.edu' },
  { name: 'Ms. Davis', email: 'ms.davis@dcs.ug.edu' },
  // Add more instructors as needed
];

class InstructorContactPage extends React.Component {
  sendEmail = (instructorName) => {
    // Simulate sending an email (for demonstration purposes)
    console.log(`Sending email to ${instructorName}`);
  };

  render() {
    return (
      <Layout>
        <div className="instructor-contact-container">
          <h2>Instructor Contact</h2>

          <ul>
            {instructors.map((instructor, index) => (
              <li key={index}>
                <strong>{instructor.name}</strong>
                <p>Email: {instructor.email}</p>
                <button onClick={() => this.sendEmail(instructor.name)}>Send Email</button>
              </li>
            ))}
          </ul>
        </div>
      </Layout>
    );
  }
}

export default InstructorContactPage;
