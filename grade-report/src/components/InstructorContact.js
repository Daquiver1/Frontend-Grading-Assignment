// Import necessary React and other components
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Form } from 'react-bootstrap'; // Import Bootstrap components
import DrImage from '../images/Soli.jpeg';
import ProfImage from '../images/Mark Atta.jpeg';
import Prof2Image from '../images/Ansong.jpeg';
import './InstructorContact.css';

const AppInstructorContact = () => {
  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [emailSubject, setEmailSubject] = useState('');
  const [emailBody, setEmailBody] = useState('');

  const instructors = [
    {
      name: 'Dr. Michael Agbo Tettey Soli',
      role: 'Professor of Computer Science',
      img: DrImage,
      researchInterests: ['Artificial Intelligence', 'Machine Learning'],
      teachingExpertise: ['Algorithms', 'Data Structures'],
      email: 'msoli@ug.edu.gh/agbotettey@gmail.com',
    },
    {
      name: 'Dr. Mark Atta Mensah',
      role: 'Computer Science Lecturer ',
      img: ProfImage,
      researchInterests: ['Data Science, Machine Learning, and Artificial Intelligence'],
      teachingExpertise: ['Artificial Intelligence'],
      email: 'mamensah@ug.edu.gh',
    },
    {
      name: 'Dr. Edward Danso Ansong',
      role: 'PHD, Computer Science and lecturer ',
      img: Prof2Image,
      researchInterests: ['Data Science, Mobile Application Developer'],
      teachingExpertise: ['Computer Security, Networking'],
      email: 'edansong@gmail.com',
    },
  ];

  const handleEmailClick = (instructor) => {
    setSelectedInstructor(instructor);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedInstructor(null);
    setShowModal(false);
    setEmailSubject('');
    setEmailBody('');
  };

  const handleSendEmail = (e) => {
    e.preventDefault();
    // Simulate sending an email (replace with actual email sending logic)
    alert(`Email sent to ${selectedInstructor.name} (${selectedInstructor.email}):\nSubject: ${emailSubject}\nBody: ${emailBody}`);
    handleCloseModal();
  };

  return (
    <section className="faculty-profiles">
      <h1 className="text-center mb-5">Our Distinguished Faculty</h1>
      <div className="container-1">
        {instructors.map((instructor, index) => (
          <div className="faculty-profile card" key={index}>
            <img className="faculty-profile-img" src={instructor.img} alt={`Faculty Profile ${index + 1}`} />
            <div className="faculty-profile-body">
              <h3 className="faculty-profile-title">{instructor.name}</h3>
              <p className="faculty-profile-text">{instructor.role}</p>
              <ul className="faculty-profile-list">
                <li>Research Interests: {instructor.researchInterests.join(', ')}</li>
                <li>Teaching Expertise: {instructor.teachingExpertise.join(', ')}</li>
              </ul>
              {/* Button to trigger email feature */}
              <button onClick={() => handleEmailClick(instructor)} className="faculty-profile-btn">
                Contact {instructor.name}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for email input */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Contact {selectedInstructor && selectedInstructor.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSendEmail}>
            <Form.Group controlId="subject">
              <Form.Label>Subject:</Form.Label>
              <Form.Control
                type="text"
                value={emailSubject}
                onChange={(e) => setEmailSubject(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="body">
              <Form.Label>Body:</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                value={emailBody}
                onChange={(e) => setEmailBody(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Send Email
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default AppInstructorContact;
