// src/components/InstructorContact.js
import React, { useState } from 'react';
import './InstructorContactPage.css'
import Footer from './Footer';
import Header from './Header';

const instructorsData = [
  { id: 1, name: 'Mr. Soli', email: 'mr.soli@gmail.com' },
  { id: 2, name: 'Prof. Aziz', email: 'prof.aziz@gmail.com' },
  { id: 3, name: 'Dr. Brown', email: 'dr.brown@yahoo.com' },
  { id: 4, name: 'Prof. Mensah', email: 'prof.mensah@gmail.com' },
  { id: 5, name: 'Dr. White', email: 'dr.white@yahoo.com' },
  { id: 6, name: 'Prof. Moore', email: 'prof.moore@yahoo.com' },
  { id: 7, name: 'Dr. Agyei', email: 'dr.agyei@yahoo.com' },
  { id: 8, name: 'Prof. Danquah', email: 'prof.danquah@gmail.com' },
  { id: 9, name: 'Dr. Apaloo', email: 'dr.apaloo@yahoo.com' },
  { id: 10, name: 'Prof. Daniels', email: 'prof.daniels@yahoo.com' }
];

const InstructorContactPage = () => {
  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [emailSubject, setEmailSubject] = useState('');
  const [emailBody, setEmailBody] = useState('');

  const handleInstructorSelect = (instructor) => {
    setSelectedInstructor(instructor);
  };

  const handleEmailSend = () => {
    console.log(`Email sent to ${selectedInstructor.name}`);
    console.log('Subject:', emailSubject);
    console.log('Body:', emailBody);

    setSelectedInstructor(null);
    setEmailSubject('');
    setEmailBody('');
  };

  return (
    <div>
        <Header/>
        <div className='page-body'>
            <div className="welcome">
                Instructor Contact
            </div>
            <section>
                <form className="instructor-contact">
                    <div className='instructor-contact-info'>
                        <h2>Instructors</h2>
                        <ul>
                        {instructorsData.map((instructor) => (
                            <li key={instructor.id} onClick={() => handleInstructorSelect(instructor)}>
                            {instructor.name} - {instructor.email}
                            </li>
                        ))}
                        </ul>
                    </div>
                </form>

                {selectedInstructor && (
                    <div>
                        <form className='contact'>
                            <div className='subject-textbox'>
                                <h2>Contact {selectedInstructor.name} By Email</h2>
                                <label htmlFor="subject">Subject:</label>
                                <input
                                className='textbox'
                                placeholder='Enter Subject'
                                type="text"
                                id="subject"
                                value={emailSubject}
                                onChange={(e) => setEmailSubject(e.target.value)}
                                required
                                />
                            </div>
                            
                            <div className='body-textbox'>
                                <label htmlFor="body">Body:</label>
                                <textarea
                                className='textarea'
                                placeholder='Enter Subject'
                                id="body"
                                value={emailBody}
                                onChange={(e) => setEmailBody(e.target.value)}
                                required
                                />
                            </div>

                            <div className='submit-button-area'>
                                <button className="submit-button"type="button" onClick={handleEmailSend}>
                                Send Email
                                </button>
                            </div>
                            
                        </form>
                    </div>
                )}
            </section>    
        </div>
        <Footer/>
    </div>
  );
};

export default InstructorContactPage;
