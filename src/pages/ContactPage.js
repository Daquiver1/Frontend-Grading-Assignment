import React, { useState } from 'react';
import { MdEmail } from 'react-icons/md';
import { TiDelete } from 'react-icons/ti';
import Header from '../components/Header';
import { Outlet, Link } from 'react-router-dom';

const ContactPage = () => {
  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSendEmail = (instructor) => {
    setSelectedInstructor(instructor);
    setIsModalOpen(true);
  };

  const instructors = [
    { name: 'Brian Ofori', email: 'mrbrian@gmail.com', phone: '+233-24-861-6096', officeHours: 'Monday 10am-12pm' },
    { name: 'Franklina Addae', email: 'afrankie306@gmail.com', phone: '+233-55-107-3301', officeHours: 'Thursday 1pm-3pm' },
    { name: 'Paul Kellerman', email: 'pkman@gmail.com', phone: '+233-59-143-6117', officeHours: 'Tuesday 10am-12pm' },
    { name: 'Alexander Mahone', email: 'almahone@gmail.com', phone: '+233-54-140-1894', officeHours: 'Friday 11am-1pm' },
    { name: 'Theodore Bagwell', email: 'tbag@gmail.com', phone: '+233-54-305-0249', officeHours: 'Thursday 3pm-5pm' },
    { name: 'Brianna Ofori', email: 'anna306@gmail.com', phone: '+233-55-102-2453', officeHours: 'Wednesday 12pm-2pm' },
  ];

  const handleCloseModal = () => {
    setSelectedInstructor(null);
    setIsModalOpen(false);
  };

  return (
    <div className="contact-page">
        <Header />
        <div className="contact-page-container">
        <h1 className="contact-page-header">Contact Instructor</h1>
        <table className="instructors-table">
            <thead>
            <tr>
                <th>Instructor</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Office Hours</th>
                <th>Send Email</th>
            </tr>
            </thead>
            <tbody>
            {instructors.map((instructor, index) => (
                <tr key={index}>
                <td>{instructor.name}</td>
                <td>{instructor.email}</td>
                <td>{instructor.phone}</td>
                <td>{instructor.officeHours}</td>
                <td>
                    <button className="send-email-btn" onClick={() => handleSendEmail(instructor)}>
                    <MdEmail /> Send Email
                    </button>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        {selectedInstructor && (
            <div className="modal-overlay">
            <div className="custom-modal">
                <span className="modal-close" onClick={handleCloseModal}><TiDelete /></span>
                <h2 className="modal-header">Send Email to {selectedInstructor.name}</h2>
                <form className="email-form">
                <label htmlFor="message" className="form-label">Message:</label>
                <textarea id="message" name="message" className="message-textarea" required></textarea>
                <button type="submit" className="send-btn">Send</button>
                </form>
            </div>
            </div>
        )}
        </div>
    </div>
  );
};

export default ContactPage;
