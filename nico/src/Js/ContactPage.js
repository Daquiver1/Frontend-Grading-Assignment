import React, { useState } from 'react';
import '../Css/ContactPage.css';
import SideNavBar from "./SideNavBar";


const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleFormSubmit = () => {
    // Implement form submission logic here
    console.log('Form Submitted:', { name, email, message });
  };

  return (
    <div className="content">
      <SideNavBar />
    <div className="contact-page-container">
      <header>
        <h1>Contact Us</h1>
      </header>

      <form onSubmit={handleFormSubmit}>
        <label>
          Your Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>

        <label>
          Your Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>

        <label>
          Message:
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default ContactPage;
