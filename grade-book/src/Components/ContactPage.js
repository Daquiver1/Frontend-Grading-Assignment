import React, { useState } from "react";
import "../Styles/ContactPage.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const ContactPage = () => {
  const [instructors, setInstructors] = useState([
    { id: 1, name: "Dr. Michael Soli", email: "michaelsoli23@gmail.com" },
    { id: 2, name: "Prof. E. Djabeng", email: "dwabeng11@gmail.com" },
    { id: 3, name: "Dr. Mark Attah Mensah", email: "mensahmark25@gmail.com" },
    { id: 4, name: "Dr. Abdul Aziz", email: "azizzbdul1@gmail.com" },
  ]);

  const [message, setMessage] = useState("");

  const handleEmail = (instructorId) => {
    const selectedInstructor = instructors.find(
      (instructor) => instructor.id === instructorId
    );
    alert(
      `An invigorate email is sent to ${selectedInstructor.name} at ${selectedInstructor.email}. Message: ${message}`
    );
  };

  return (
    <div className="Page-content">
      <Navbar />
      <div className="contact-page">
        <h2>Instructor Contact Page</h2>
        <ul className="instructor-list">
          {instructors.map((instructor) => (
            <li key={instructor.id} className="instructor-item">
              <h3>{instructor.name}</h3>
              <p>Email: {instructor.email}</p>
              <textarea
                placeholder="Enter your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button onClick={() => handleEmail(instructor.id)}>
                Send Email
              </button>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
