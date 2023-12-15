import React, { useState } from 'react';
import './HelpAndSupport.css';
import  Navbar from '../navigation';
import backgroundImage from '../Images/help-and-support.jpg';
const HelpAndSupport = () => {
  const [contactFormData, setContactFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [confirmation, setConfirmation] = useState(null);

  const handleContactFormChange = (e) => {
    setContactFormData({
      ...contactFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleContactFormSubmit = (e) => {
    e.preventDefault();

    setConfirmation(`Support request sent for ${contactFormData.name}.`);

    
  };

  return (
    <div className="help-and-support">
      <navigation/>
      <div className="background-container"></div>
        <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
      <h2>Help and Support</h2>

      <div className="faqs">
        <h3>Frequently Asked Questions</h3>
        <ul>
          <li>How do I reset my password?</li>
          <li>What should I do if I forget my username?</li>
          <li>How can I update my account information?</li>
          
        </ul>
      </div>

      <div className="contact-form">
        <h3>Contact Support</h3>
        <form onSubmit={handleContactFormSubmit}>
          <label className='la'>
            Name:
            <input
              type="text"
              name="name"
              value={contactFormData.name}
              onChange={handleContactFormChange}
            />
          </label>
          <label className='la'>
            Email:
            <input
              type="email"
              name="email"
              value={contactFormData.email}
              onChange={handleContactFormChange}
            />
          </label>
          <label className='la'>
            Message:
            <textarea
              name="message"
              value={contactFormData.message}
              onChange={handleContactFormChange}
            ></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
        {confirmation && <p className="confirmation">{confirmation}</p>}
      </div>
    </div>
  );
};

export default HelpAndSupport;