import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const InstructorContactPage = () => {
  // Dummy data, replace with actual data from your backend
  const instructors = [
    { name: 'Dr. Smith', email: 'drsmith@example.com' },
    { name: 'Prof. Johnson', email: 'profjohnson@example.com' },
  ];

  const sendEmail = (instructorEmail) => {
    // Dummy function, replace with your email sending logic
    console.log(`Sending email to ${instructorEmail}`);
  };

  return (
    <div className="container">
      <Navbar />
      <h2>Instructor Contact</h2>
      <div>
        <h3>Contact Information</h3>
        <ul>
          {instructors.map((instructor, index) => (
            <li key={index}>
              {instructor.name} - <a href={`mailto:${instructor.email}`} onClick={() => sendEmail(instructor.email)}>Email</a>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default InstructorContactPage;

