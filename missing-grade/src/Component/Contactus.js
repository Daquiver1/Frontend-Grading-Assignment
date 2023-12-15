import React, { useState } from "react";
import "./styles/Contactus.css";
import InstructorList from "./instructorlist";
import ContactBackground from "../Assets/contactus.avif";

const Contact = () => {
  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [emailContent, setEmailContent] = useState("");

  const handleInstructorSelect = (instructor) => {
    setSelectedInstructor(instructor);
  };

  const handleEmailSubmit = () => {
    // Simulate sending an email (you can implement this based on your needs)
    alert(
      `Simulating email sent to ${selectedInstructor.name} with content: ${emailContent}`
    );
  };

  return (
    <div className="contact-section-container">
      <div className="contact-background-image-container">
        <img src={ContactBackground} alt="" />
      </div>
      <div className="contact-page-wrapper">
        <h1 className="primary-heading">Have a Question in Mind?</h1>
        <h1 className="primary-heading">Let Us Help You</h1>
        <div className="contact-form-container">
          <input
            type="text"
            placeholder="yourmail@gmail.com"
            onChange={(e) => setEmailContent(e.target.value)}
          />
          <button className="secondary-button" onClick={handleEmailSubmit}>
            Submit
          </button>
        </div>
      </div>

      {/* New section for Instructor List */}
      <div className="instructor-list-container">
        <h2 className="secondary-heading">Instructors</h2>
        <InstructorList onSelect={handleInstructorSelect} />
      </div>

      {/* Display selected instructor details */}
      {selectedInstructor && (
        <div className="instructor-details-container">
          <h2 className="secondary-heading">{selectedInstructor.name}</h2>
          <p>Email: {selectedInstructor.email}</p>
          <p>Office: {selectedInstructor.office}</p>
        </div>
      )}
    </div>
  );
};

export default Contact;
