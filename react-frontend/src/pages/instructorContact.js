import React, { useState } from "react";
import "../styles/contactus.css";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  const instructors = [
    {
      name: "Micheal Agbo Tettey Soli",
      email: "magbo@ug.edu.gh",
      phone: "+233 200 200 200",
    },
    {
      name: "Paul Ammah",
      email: "Pamma@ug.edu.gh",
      phone: "+233 200 200 200",
    },
    {
      name: "Abdullai Dwumfour Aziz",
      email: "Ada@ug.edu.gh",
      phone: "+233 200 200 200",
    },
    {
      name: "Benjamin Ghansah",
      email: "benghansah@ug.edu.gh",
      phone: "+233 200 200 200",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Message:", message);
    console.log("Subject:", subject);
  };

  return (
    <div className="contact-us">
      <div className="wrapper1">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="subject">Subject:</label>
            <input type="text" id="subject" name="subject" required />
          </div>
          <div className="input-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required />
          </div>
          <div className="instructors">
            {instructors.map((instructor) => (
              <div key={instructor.id} className="instructor">
                <h3>{instructor.name}</h3>
                <p>Email: {instructor.email}</p>
                <p>Phone: {instructor.phone}</p>
              </div>
            ))}
          </div>
          <div className="submit-btn">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
