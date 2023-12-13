import React from 'react';
import NavBar from './NavBar';
import './Contact.css';

const Contact = () => {
  const instructors = [
    {
      id: 1,
      name: 'Instructor 1',
      email: 'instructor1@example.com',
      imageSrc: 'path/to/instructor1.jpg',
    },
    {
      id: 2,
      name: 'Instructor 2',
      email: 'instructor2@example.com',
      imageSrc: 'path/to/instructor2.jpg',
    },
    {
      id: 3,
      name: 'Instructor 3',
      email: 'instructor3@example.com',
      imageSrc: 'path/to/instructor3.jpg',
    },
    {
      id: 4,
      name: 'Instructor 4',
      email: 'instructor4@example.com',
      imageSrc: 'path/to/instructor4.jpg',
    },
  ];

  const handleSendEmail = (email) => {

    console.log(`Simulated email sent to ${email}`);
  };

  return (
    <>
    <NavBar/>
    <div className="instructor-contact-page-container">
      <h1>Instructor Contact Page</h1>
      <div className="instructor-list-container">
        {instructors.map((instructor) => (
          <div className="instructor-card" key={instructor.id}>
            <img src={instructor.imageSrc} alt={`Instructor ${instructor.id}`} />
            <div className="instructor-details">
              <h3>{instructor.name}</h3>
              <p>Email: {instructor.email}</p>
              <button onClick={() => handleSendEmail(instructor.email)}>Send Email</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};



export default Contact;

