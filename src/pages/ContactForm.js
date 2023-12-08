import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent! \nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
  };

  return (
    <div className="contact-form">
      <h3>Contact Technical Support</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Message:
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
