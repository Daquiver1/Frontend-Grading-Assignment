import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Header from './Header';
import Footer from './PageFooter';
import { FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ContactPage = () => {
  const navigate = useNavigate();

  // Sample data for instructors
  const instructorsData = [
    { id: 1, name: 'Adu Gyamfi ', email: 'adgyamfi@gmail.com' },
    { id: 2, name: 'Anthony Broni', email: 'bronianthony@gmail.com' },
    { id: 3, name: 'Ofori Frederick', email: 'fredofori@gmail.com' },
    { id: 2, name: 'Samuel Owusu', email: 'samuelowu@gmail.com' },
    { id: 3, name: 'Roderick Asante', email: 'rodasante@gmail.com' },
    { id: 2, name: 'Franklina Addae', email: 'addaefranklina@gmail.com' },
    { id: 3, name: 'George Antwi', email: 'antwigeorge@gamil.com' },
  ];

  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);

  const [selectedInstructor, setSelectedInstructor] = useState(null);

  const handleEmailClick = (instructor) => {
    // Simulate sending an email (you can implement the actual logic here)
    alert(`Simulating sending email to ${instructor.name} (${instructor.email})`);
  };

  const handleLogoutClick = () => {
    setShowLogoutConfirmation(true);
  };

  const handleLogoutConfirmation = (confirmed) => {
    setShowLogoutConfirmation(false);
    if (confirmed) {
      // Redirect to the LoginPage
      navigate('/'); // Update the path based on your route configuration
    }
  };

  return (
    <div>
      <Header />
    <div className="instructor-contact-page">
      <div>
      <h1>Instructor Contact Page</h1>
      <p>Connect directly with your instructors or academic administration to address any concerns.</p>
      <ul>
        {instructorsData.map((instructor) => (
          <li key={instructor.id} className="instructor-item">
            <strong>{instructor.name}</strong>
            <p>Email: {instructor.email}</p>
            <button onClick={() => handleEmailClick(instructor)}>Send Email</button>
          </li>
        ))}
      </ul>
      </div>
      <div class="message-box">
        <h2>Send a Message</h2>
        <form>
           <textarea id="message" name="message" placeholder="Type your message here..." required></textarea>
           <button type="submit">Send Message</button>
        </form>
  </div>    
  </div>
  <Footer />
  </div>
  );
};

export default ContactPage;
