import React, { useState } from 'react';

const HelpSupportPage = () => {
  // State for form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic (for example, console logging for mock-up)
    console.log('Form submitted:', { name, email, message });
    // Clear form fields after submission (optional)
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <h2>Help and Support</h2>
      <div>
        <h3>FAQs</h3>
        {/* Your FAQ section */}
      </div>
      <div>
        <h3>Contact Technical Support</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default HelpSupportPage;
