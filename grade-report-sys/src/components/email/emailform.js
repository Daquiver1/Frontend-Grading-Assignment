import React, { useState } from 'react';
import './emailform.css'; // Import the CSS file

const EmailForm = () => {
  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className='formsect'>
        <form className="email-form" onSubmit={handleFormSubmit}>
      <label>
        To:
        <input
          type="email"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Subject:
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </label>
      <br />
      <label>
        Body:
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Send Email</button>
    </form>
    </div>
    
  );
};

export default EmailForm;
