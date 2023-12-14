import React, { useState } from 'react';
import './Instructorcontact.css';

const Instructorcontact = () => {
  const contacts = [
    { name: ' Michael Soli', contact: '0201232199', email: 'Soli@gmail.com' },
    { name: ' Mark Atta Mensah', contact: '0509999277', email: 'MarkAttaMensah@gmail.com' },
    { name: 'Ferdinand Katsriku', contact: '0208461345', email: 'FerdinandKatsriku@gmail.com' },
    { name: ' Ben-Bright Benuwa', contact: '0503567265', email: 'BenBenuwa@gmail.com' },
    { name: ' Aziz', contact: '0248790097', email: 'Aziz@gmail.com' },
  ];

  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'recipient') setRecipient(value);
    if (name === 'subject') setSubject(value);
    if (name === 'message') setMessage(value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Simulate sending email (you can replace this with actual API call)
    console.log('Simulated Email Sent:', {
      recipient,
      subject,
      message,
    });
    setIsEmailSent(true);
  };

  return (
    <div className="instructor-contact">
      <div className="instructor-list">
        <h2>Instructors</h2>
        <ul>
          {contacts.map((contact, index) => (
            <li key={index}>
              <div>
                <strong>Name:</strong> {contact.name}
              </div>
              <div>
                <strong>Contact:</strong> {contact.contact}
              </div>
              <div>
                <strong>Email:</strong> {contact.email}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <hr />

      <div className="contact-form">
        <h2>Contact Instructor</h2>
        {isEmailSent ? (
          <p className='sent'>Email sent successfully!</p>
        ) : (
          <form onSubmit={handleFormSubmit}>
            <label>
              Recipient:
              <select
                name="recipient"
                value={recipient}
                onChange={handleInputChange}
                required
              >
                <option value="">Select an instructor</option>
                {contacts.map((contact, index) => (
                  <option key={index} value={contact.email}>
                    {contact.name}
                  </option>
                ))}
              </select>
            </label>
            <br />
            <label>
              Subject:
              <input
                type="text"
                name="subject"
                value={subject}
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
            <button type="submit">Send Email</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Instructorcontact;
