import React, { useState } from 'react';

const InstructorContactPage = () => {
  const instructors = [
    { id: 1, name: 'Mark Atta Mensah', email: 'mark.mensah@example.com' },
    { id: 2, name: 'Michael Soli', email: 'm.sorli@example.com' },
    { id: 3, name: 'Abdul Aziz', email: 'a.aziz@example.com' },
  ];

  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [emailSubject, setEmailSubject] = useState('');
  const [emailBody, setEmailBody] = useState('');

  const handleInstructorClick = (instructor) => {
    setSelectedInstructor(instructor);
  };

  const handleSendEmail = () => {
    if (selectedInstructor) {
      alert(`Email sent to ${selectedInstructor.name}`);
    } else {
      alert('Please select an instructor before sending an email.');
    }

    setSelectedInstructor(null);
    setEmailSubject('');
    setEmailBody('');
  };

  return (
    <div style={styles.container}>
      <h2>Instructor Contact Page</h2>

      <div style={styles.instructorList}>
        <h3>Instructor List</h3>
        <ul>
          {instructors.map((instructor) => (
            <li
              key={instructor.id}
              onClick={() => handleInstructorClick(instructor)}
              style={{
                ...styles.instructorItem,
                backgroundColor:
                  selectedInstructor === instructor ? '#ddd' : 'transparent',
              }}
            >
              {instructor.name} - {instructor.email}
            </li>
          ))}
        </ul>
      </div>

      {selectedInstructor && (
        <div style={styles.emailForm}>
          <h3>Email {selectedInstructor.name}</h3>
          <label htmlFor="emailSubject">Subject:</label>
          <input
            type="text"
            id="emailSubject"
            value={emailSubject}
            onChange={(e) => setEmailSubject(e.target.value)}
          />

          <label htmlFor="emailBody">Body:</label>
          <textarea
            id="emailBody"
            value={emailBody}
            onChange={(e) => setEmailBody(e.target.value)}
            rows="4"
          ></textarea>

          <button onClick={handleSendEmail}>Send Email</button>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
  },
  instructorList: {
    marginBottom: '20px',
  },
  instructorItem: {
    cursor: 'pointer',
    padding: '8px',
    marginBottom: '5px',
  },
  emailForm: {
    marginTop: '20px',
  },
};

export default InstructorContactPage;
