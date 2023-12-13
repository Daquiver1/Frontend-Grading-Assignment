import React, { useState } from "react";
import "../components-css/HS.css"

function HelpAndSupportPage() {
  const [name, setName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send contact form data to IT Help Desk
    // Implement logic for sending form data here
    console.log(`Form submitted with the following data:
    Name: ${name}
    Student ID: ${studentId}
    Email: ${email}
    Subject: ${subject}
    Description: ${description}`);

    // Clear form fields
    setName("");
    setStudentId("");
    setEmail("");
    setSubject("");
    setDescription("");
  };

  return (
    <div className="help-and-support-page">
      <h2>Help and Support: Grade Reporting</h2>
      <p>
        Welcome to the Help and Support page for Grade Reporting! This page
        provides resources to help you understand and navigate the grade
        reporting system. If you have any questions or encounter technical
        difficulties, please don't hesitate to contact us.
      </p>

      <h3>FAQ Section</h3>

      <ul className="faq-list">
        <li>
          <h4>How do I access my grade report?</h4>
          <p>
            You can access your grade report by logging into your student
            portal and navigating to the "Grades" section.
          </p>
        </li>
        {/* Add additional FAQ items here */}
      </ul>

      <h3>Contact Technical Support</h3>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <br />

        <label htmlFor="studentId">Student ID:</label>
        <input
          type="text"
          id="studentId"
          value={studentId}
          onChange={(event) => setStudentId(event.target.value)}
        />
        <br />

        <label htmlFor="email">Email Address:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />

        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          id="subject"
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
        />
        <br />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default HelpAndSupportPage;