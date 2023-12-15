// InstructorContactPage.js
import React, { useState } from 'react';
import { Table, Form, Button, Modal, Alert } from 'react-bootstrap';
import './InstructorContactPage.css'; // Import your CSS file for styling
import Navbar from '../Navbar';
import Footer from '../footer';

const InstructorContactPage = () => {
  const [instructors, setInstructors] = useState([
    {
      id: 1,
      name: 'Dr. Michael Soli',
      email: 'dr.soli@st.ug.educom',
      telephone: '+233 (059) 456-7890',
      office: '123A',
      profileImage: 'https://via.placeholder.com/50', 
    },
    {
      id: 2,
      name: 'Prof. Ferdinand Appietu',
      email: 'prof.ferdinand@st.ug.edu.com',
      telephone: '+233 (059) 456-7890',
      office: '456B',
      profileImage: 'https://via.placeholder.com/50', 
    },
    {
        id: 3,
        name: 'Sir.  Mark Atta ',
        email: 'sir.markatta@st.ug.edu.com',
        telephone: '+233 (059) 456-7890',
        office: '456B',
        profileImage: 'https://via.placeholder.com/50', 
      },
    {
        id: 4,
        name: 'Dr. Aziz',
        email: 'dr.aziz@st.ug.edu.com',
        telephone: '+233 (059) 456-7890',
        office: '456B',
        profileImage: 'https://via.placeholder.com/50', 
      },
      {
        id: 5,
        name: 'Sir. Paul Nii',
        email: 'sir.paul@st.ug.edu.com',
        telephone: '+233 (059) 456-7890',
        office: '456B',
        profileImage: 'https://via.placeholder.com/50', 
      },
  ]);

  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const handleInstructorSelect = (instructor) => {
    setSelectedInstructor(instructor);
    setShowContactModal(true);
  };

  const handleCloseContactModal = () => {
    setShowContactModal(false);
    setSelectedInstructor(null);
  };

  const handleContactSubmit = (formData) => {
    // Simulate a successful submission
    setShowSuccessAlert(true);
    // Close the modal after submission
    handleCloseContactModal();
  };

  return (
    <div>
      <Navbar/>
    <div className="container mt-5">
      <h1 className="mb-4">Instructor Contact List</h1>

      {/* Button to open the contact form */}
      <Button variant="primary" onClick={() => setShowContactModal(true)} className="mb-3">
        Contact Instructor
      </Button>

      {/* Success alert */}
      {showSuccessAlert && (
        <Alert variant="success" onClose={() => setShowSuccessAlert(false)} dismissible>
          Email submitted successfully!
        </Alert>
      )}

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Instructor</th>
            <th>Email</th>
            <th>Telephone</th>
            <th>Office</th>
          </tr>
        </thead>
        <tbody>
          {instructors.map((instructor) => (
            <tr key={instructor.id} onClick={() => handleInstructorSelect(instructor)}>
              <td>
                <img src={instructor.profileImage} alt={`${instructor.name}'s profile`} className="profile-image" />
                {instructor.name}
              </td>
              <td>{instructor.email}</td>
              <td>{instructor.telephone}</td>
              <td>{instructor.office}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showContactModal} onHide={handleCloseContactModal}>
        <Modal.Header closeButton>
          <Modal.Title>Contact {selectedInstructor?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => {
            e.preventDefault();
            handleContactSubmit({
              instructor: selectedInstructor?.name,
              ...Object.fromEntries(new FormData(e.target)),
            });
          }}>
            <Form.Group controlId="formContactName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" name="name" required />
            </Form.Group>
            <Form.Group controlId="formContactEmail">
              <Form.Label>Your Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" name="email" required />
            </Form.Group>
            <Form.Group controlId="formContactMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" placeholder="Enter your message" name="message" rows={4} required />
            </Form.Group>
            <Button variant="primary" type="submit">
              Send Email
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
    <div>
      <Footer/>
    </div>
    </div>
  );
};

export default InstructorContactPage;
