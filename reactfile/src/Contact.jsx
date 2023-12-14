import React from 'react';
import NavBar from './NavBar';
import './Contact.css';
import Footer from './Footer';

const Contact = () => {
  const instructors = [
    {
      id: 1,
      name: 'Ferdinard Katsriku',
      email: 'fersww@gmail.com',
      imageSrc: '/Ferdd.jpeg',
    },

    {
      id: 2,
      name: 'Michael Agbo Tettey Soli',
      email: 'msoli@ug.edu.gh',
      imageSrc: '/Soli.webp',
    },
  
    {
      id: 3,
      name: 'Salomey Mensah',
      email: 'saowusu@gmail.com',
      imageSrc: '/salo.jpeg',
    },

    {
      id: 4,
      name: 'Alysd Aziz',
      email: 'azizsyd@ug.edu.gh',
      imageSrc: '/alysd.jpeg',
    },


  ];

  const handleSendEmail = (email) => {

    console.log(`Simulated email sent to ${email}`);
  };

  return (
    <>
    <NavBar/>
    <div
     style={{
      backgroundImage: 'url("/ash1.jpg")',
    }} className="inst-container"> 
    <div className="instructor-contact-page-container">
      <h1>Instructor Contact Page</h1>
      <div className="instructor-list-container">
        {instructors.map((instructor) => (
          <div className="instructor-card" key={instructor.id}>
            <img src={instructor.imageSrc} alt={`Instructor ${instructor.id}`} />
            <div className="instructor-details">
              <h3>{instructor.name}</h3>
              <button onClick={handleSendEmail}>Send Email</button>
              <p>Email: {instructor.email}</p>
              
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    <Footer/>
    </>
  );
};



export default Contact;

