import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation';
import Footer from  './Footer'
const InstructorContact = () => {
  // Mock data for instructors with contact details
  const instructors = [
    { id: 1, name: 'Raymond Dwamena-Akenten', email: 'raymond.da@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Bettina Walters', email: 'bettina.walters@example.com', phone: '987-654-3210' },
    { id: 3, name: 'Korsah Yankah', email: 'korsahyankah@example.com', phone: '987-654-3210' },

    // Add more instructors with their contact details
  ];

  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [emailContent, setEmailContent] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const handleEmailSend = () => {
    // Simulate sending email (display confirmation message)
    setEmailSent(true);
    // Clear email content (optional)
    setEmailContent('');
  };

  return (
    <div>
        <Navigation />
        <Footer />
    <div className="container mt-4">
      <h1>Instructor Contact</h1>

      <div className="row mt-4">
        {/* Instructor List */}
        <div className="col-md-4">
          <h2>Instructors</h2>
          <ul className="list-group">
            {instructors.map((instructor) => (
              <li
                key={instructor.id}
                className={`list-group-item ${selectedInstructor === instructor.id ? 'active' : ''}`}
                onClick={() => setSelectedInstructor(instructor.id)}
                style={{ cursor: 'pointer' }}
              >
                {instructor.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Instructor Details & Email */}
        <div className="col-md-8">
          {selectedInstructor !== null ? (
            <div>
              <h2>{instructors[selectedInstructor - 1].name}</h2>
              <p>Email: {instructors[selectedInstructor - 1].email}</p>
              <p>Phone: {instructors[selectedInstructor - 1].phone}</p>

              <div className="mb-3">
                <label htmlFor="emailContent" className="form-label">Compose Email</label>
                <textarea
                  className="form-control"
                  id="emailContent"
                  rows="4"
                  value={emailContent}
                  onChange={(e) => setEmailContent(e.target.value)}
                ></textarea>
              </div>

              <button
                className="btn btn-primary"
                onClick={handleEmailSend}
              >
                Send Email
              </button>

              {emailSent && (
                <div className="alert alert-success mt-3" role="alert">
                  Email sent successfully!
                </div>
              )}
            </div>
          ) : (
            <p>Select an instructor to view contact details and send an email.</p>
          )}
        </div>
      </div>
    </div></div>

  );
};

export default InstructorContact;
