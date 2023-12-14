import React, { useState } from 'react';
import './InstructorContact.css';
import Navbar from './Navbar';
import Footer from './Footer';

const instructorsData = [
  { id: 1, name: 'Dwumfour Abdullai Abdul-Aziz', email: 'adwumfour@ug.edu.gh', courseCodes: ['DCIT203'] },
  { id: 2, name: 'Michael Agni Soli', email: 'MicSoli@ug.ed.gh', courseCodes: ['DCIT205'] },
  { id: 3, name: 'Paul Nii Tachie Ammah', email: 'PaulNii@ug.edu.gh', courseCodes: ['DCIT209'] },
  { id: 4, name: 'Benjamin Ghansah', email: 'Bghansah@ug.edu.gh', courseCodes: ['ENG101'] },
  { id: 5, name: 'Nancy Myles', email: 'NancyMyles@ug.edu.gh', courseCodes:['UGRC120']},
  { id: 5, name: 'Kenneth Dadedzi', email: 'Kdadedzi@ug.edu.gh', courseCodes:['Math123']},
  { id: 6, name: 'Grace Anane', email: 'Ganane@ug.edu.gh', courseCodes: ['DCIT205', 'STAT204'] },
  { id: 7, name: 'Emmanuel Adu-Gyamfi', email: 'Eadugyamfi@ug.edu.gh', courseCodes: ['DCIT206', 'MATH205'] },
  { id: 8, name: 'Abena Yeboah', email: 'Ayeboah@ug.edu.gh', courseCodes: ['ENG202', 'UGRC201'] },

];


const InstructorContactPage = () => {
  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [emailContent, setEmailContent] = useState('');

  const handleInstructorSelect = (instructor) => {
    setSelectedInstructor(instructor);
    setEmailContent(`Dear ${instructor.name},\n\nI hope this email finds you well.`);
  };

  const handleEmailChange = (e) => {
    setEmailContent(e.target.value);
  };

  const handleSendEmail = () => {
    alert(`Simulating sending email to ${selectedInstructor.email}:\n\n${emailContent}`);
  };

  return (
    <>
    <Navbar />
    <div className="instructor-contact-page">
      <h1>Instructor Contact Page</h1>

      <section className="instructors-section">
        <h2>Instructors</h2>
        <ul>
          {instructorsData.map((instructor) => (
            <li key={instructor.id}>
              <div
                className={`instructor-card ${selectedInstructor?.id === instructor.id ? 'selected' : ''}`}
                onClick={() => handleInstructorSelect(instructor)}
              >
                <p className="instructor-name">{instructor.name}</p>
                <p className="instructor-email">{instructor.email}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {selectedInstructor && (
        <section className="contact-details-section">
          <h2>Contact Details</h2>
          <p>Name: {selectedInstructor.name}</p>
          <p>Email: {selectedInstructor.email}</p>
          <p>Courses: {selectedInstructor.courseCodes.join(', ')}</p>
        </section>
      )}

      {selectedInstructor && (
        <section className="send-email-section">
          <h2>Send Email</h2>
          <textarea
            className="email-textarea"
            value={emailContent}
            onChange={handleEmailChange}
            placeholder={`Type your email content here for ${selectedInstructor.name}`}
          />
          <button className="send-email-button" onClick={handleSendEmail}>
            Send Email
          </button>
        </section>
      )}

      <section className="passages-section">
      <h2></h2>
    <p>
        Welcome to the Instructor Contact Page! This page allows you to explore information about our
        dedicated instructors who play a vital role in shaping the learning experience.
    </p>
    <p>
        Instructors provide valuable insights, guidance, and support. They are here to assist you on your
        educational journey. Feel free to select an instructor, view their contact details, and even
        send a simulated email.
    </p>
    <p>
        Effective communication with instructors is essential for a successful academic experience.
        Whether you have questions, need clarification, or simply want to express your thoughts,
        our instructors are here to help.
    </p>
      </section>
    </div>
    <Footer />
    </>
  );
};

export default InstructorContactPage;
