import React, { useState } from "react";
import "../components-css/Instructor.css"

const instructors = [
  {
    name: "Mr B. Ghansah",
    department: "Computer Science",
    photo: "/images/instructor1.jpg",
    email: "bg@example.com",
    office: "Building 22, Room 4",
  },
  {
    name: "Mr Nana Assyne",
    department: "Computer Science",
    photo: "/images/instructor2.jpg",
    email: "jnanaassyne@example.com",
    office: "Building 2, Room 107",
  },
  {
   name: "Mr Aziz Dwumfuor",
   department: "Mathematics",
   photo: "/images/instructor2.jpg",
   email: "jazizdwumfuor@example.com",
   office: "Building 5, Room 60",
 },
 {
   name: "Mr Paul Ammah",
   department: "Computer Science",
   photo: "/images/instructor2.jpg",
   email: "paulammah@example.com",
   office: "Building 1, Room 102",
 },
 {
   name: "PBS",
   department: "Linguistics",
   photo: "/images/instructor2.jpg",
   email: "pbs@example.com",
   office: "Building 9, Room 36",
 },
  
];

function InstructorCard({ instructor }) {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSendEmailClick = () => {
    alert("The message has been sent.");
  };

  return (
    <div className="instructor-card">
      <img src={instructor.photo} alt={instructor.name} />
      <div className="instructor-info">
        <h4>{instructor.name}</h4>
        <p>{instructor.department}</p>
        <a href={`mailto:${instructor.email}`}>{instructor.email}</a>
        <p>Office: {instructor.office}</p>
      </div>
      <div className="send-email-container">
        <h3>Send a Message</h3>
        <form onSubmit={handleSendEmailClick}>
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
          />
          <br />
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
          <br />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

function InstructorContactPage() {
  return (
    <div className="instructor-contact-page">
      <h2>Instructor Contact</h2>
      <ul className="instructor-list">
        {instructors.map((instructor) => (
          <InstructorCard key={instructor.email} instructor={instructor} />
        ))}
      </ul>
    </div>
  );
}

export default InstructorContactPage;