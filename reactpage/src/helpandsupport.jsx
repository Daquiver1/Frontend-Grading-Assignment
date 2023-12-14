import React, { useState } from 'react';
import './Helpandsupport.css';

const Helpandsupport = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') setName(value);
    if (name === 'email') setEmail(value);
    if (name === 'message') setMessage(value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Simulate submitting the contact form (you can replace this with an actual API call)
    console.log('Simulated Contact Form Submitted:', {
      name,
      email,
      message,
    });
    setIsFormSubmitted(true);
  };

  return (
    <div className="help-and-support">
      <h2>Help and Support</h2>
      <section>
        <h3>FAQs - Grade Reporting</h3>
        <ul className='QA'>
          <li>Q: How can I view my grade report?</li>
          <p className='QA'> A: You can view your grade report on the "Grade Report" page in the dashboard.</p>
          <p>&nbsp;</p>
          <li>Q: When are the grades usually updated?</li>
          <p className='QA'>A: Grades are typically updated at the end of each semester.</p>
          <p>&nbsp;</p>
          <li>Q: How can I request a missing grade report?</li>
          <p className='QA'>A: To request a missing grade report, please use the contact form below.</p>
          {/* Add more FAQs as needed */}
        </ul>
      </section>
      <hr />

      <section>
        <h3>Contact Technical Support</h3>
        {isFormSubmitted ? (
          <p className="confirmation-message">Thank you. We will get back to you shortly!</p>
        ) : (
          <form onSubmit={handleFormSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={name}
                onChange={handleInputChange}
                required
              />
            </label>
            <br />
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleInputChange}
                required
              />
            </label>
            <br />
            <label>
              Message:
              <textarea
                name="message"
                value={message}
                onChange={handleInputChange}
                required
              />
            </label>
            <br />
            <button type="submit">Submit</button>
          </form>
        )}
      </section>
    </div>
  );
};

export default Helpandsupport;
