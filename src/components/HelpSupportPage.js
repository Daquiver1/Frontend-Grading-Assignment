import React, { useState } from 'react';
import Styles from './HelpSupport.module.css'

const HelpSupportPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate sending a support message (replace with actual support functionality)
    alert('Support message sent successfully!');

    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="help-support-container">
      <h2>Help and Support</h2>

      <section>
        <h3>Frequently Asked Questions</h3>
        <ul>
          <li>Q: How do I report a missing grade?</li>
          <li>A: Navigate to the "Report Missing Grades" page and fill out the form.</li>

          <li>Q: Can I change my password?</li>
          <li>A: Currently, there is no functionality for changing passwords.</li>
        </ul>
      </section>

      <section>
        <h3>Contact Technical Support</h3>

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="email">Your Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="message">Your Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />

          <button type="submit">Submit</button>
        </form>
      </section>
      
    </div>
    
  );
};

export default HelpSupportPage;
