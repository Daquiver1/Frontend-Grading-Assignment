import './InstructorContactPage.css';
import React, { useState } from 'react';
import Footer from './FooterCode';

const InstructorContactPage = () => {
  const [instructors] = useState([
    { id: 1, name: 'Dr. Michael Agbo Tetteh Soli', email: 'agbotetteh@gmail.com' },
    { id: 2, name: 'Prof. Jamal-Deen', email: 'jamaldeden@gmail.com' },
    { id: 3, name: 'Mr. Mark Attah Mensah', email: 'mamensah@st.ug.edu.gh' },
    { id: 4, name: 'Prof. Kenneth Dadzedi', email: 'dkenneth@gmail.com' },
  ]);

  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [emailSubject, setEmailSubject] = useState('');
  const [emailBody, setEmailBody] = useState('');

  const handleInstructorSelect = (instructor) => {
    setSelectedInstructor(instructor);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();

    console.log('Sending email to', selectedInstructor.name);
    console.log('Subject:', emailSubject);
    console.log('Body:', emailBody);

    alert(' Email sent successfully!');
  };

  return (
    <div>
        <div className="instructor-contact-container">
      <h2>Contact Your Instructor</h2>

      <div className="instructor-list">
        <h3>Instructor List</h3>
        <ul>
          {instructors.map((instructor) => (
            <li
              key={instructor.id}
              onClick={() => handleInstructorSelect(instructor)}
              className={selectedInstructor?.id === instructor.id ? 'selected' : ''}
            >
              {instructor.name}
            </li>
          ))}
        </ul>
      </div>

      {selectedInstructor && (
        <div className="selected-instructor">
          <h3>Contact {selectedInstructor.name}</h3>
          <p>Email: {selectedInstructor.email}</p>

          <form onSubmit={handleEmailSubmit}>
            <div className="form-section">
              <label htmlFor="emailSubject">Subject:</label>
              <input
                type="text"
                id="emailSubject"
                value={emailSubject}
                onChange={(e) => setEmailSubject(e.target.value)}
                required
              />
            </div>

            <div className="form-section">
              <label htmlFor="emailBody">Message:</label>
              <textarea
                id="emailBody"
                value={emailBody}
                onChange={(e) => setEmailBody(e.target.value)}
                required
              ></textarea>
            </div>

            <button type="submit">Send Email</button>
          </form>
        </div>
      )}

      
    </div>
    <Footer />
    </div>
    
  );
};

export default InstructorContactPage;
