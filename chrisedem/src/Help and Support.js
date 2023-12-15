import React, { useState } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const HelpAndSupport = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    
    console.log('Form submitted:', { name, email, subject, message });

    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <div>
      <Navbar />
      <div className="HelpAndSupport">
        <h1 className="help-support-heading">Help and Support</h1>

        <div className="help-support-content">
          <p>
            Welcome to the Help and Support page! If you have any questions or issues, please feel free to reach out to us by filling out the form below.
          </p>

          <form onSubmit={handleSubmit}>
            <label htmlFor="name">
              Name:
              <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </label>

            <label htmlFor="email">
              Email:
              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </label>

            <label htmlFor="subject">
              Subject:
              <input type="text" id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} required />
            </label>

            <label htmlFor="message">
              Message:
              <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
            </label>

            <button type="submit" style={{ backgroundColor: '#35d8f1', color: 'white' }}>
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HelpAndSupport;
