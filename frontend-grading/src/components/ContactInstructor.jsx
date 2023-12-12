// ContactInstructor.jsx
import React, { useState } from 'react';
import './ContactInstructor.css';

const ContactInstructor = () => {
  const [instructors] = useState([
    { id: 1, name: 'Dr. Smith', email: 'dr.smith@example.com', workingTime: 'Mon-Fri, 9 AM - 5 PM' },
    { id: 2, name: 'Prof. Johnson', email: 'prof.johnson@example.com', workingTime: 'Tue-Sat, 10 AM - 6 PM' },
    { id: 3, name: 'Dr. Brown', email: 'dr.brown@example.com', workingTime: 'Mon-Wed, 8 AM - 4 PM' },
    { id: 4, name: 'Prof. Davis', email: 'prof.davis@example.com', workingTime: 'Thu-Sat, 11 AM - 7 PM' },
  ]);

  const [message, setMessage] = useState('');
  const [selectedInstructor, setSelectedInstructor] = useState(null);

  const handleContact = () => {
    if (selectedInstructor) {
      // Implement your logic to handle contacting the instructor
      console.log(`Contacting ${selectedInstructor.name} at ${selectedInstructor.email}`);
      console.log(`Message: ${message}`);
      // Reset form fields after submitting the message
      setSelectedInstructor(null);
      setMessage('');
    }
  };

  return (
    <div className="contact-instructor-container">
      <h1>Contact Instructors</h1>
      <div className="instructors-table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Working Time</th>
            </tr>
          </thead>
          <tbody>
            {instructors.map((instructor) => (
              <tr key={instructor.id} onClick={() => setSelectedInstructor(instructor)}>
                <td>{instructor.id}</td>
                <td>{instructor.name}</td>
                <td>{instructor.email}</td>
                <td>{instructor.workingTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedInstructor && (
        <div className="message-form">
          <h2>Send a Message to {selectedInstructor.name}</h2>
          <form>
            <label>
              Your Message:
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message here..."
              />
            </label>
            <button type="button" onClick={handleContact}>
              Send Message
            </button>
          </form>
        </div>
      )}

      <div className="additional-content">
  
      </div>
    </div>
  );
};

export default ContactInstructor;
