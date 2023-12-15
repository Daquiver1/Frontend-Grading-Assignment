// ContactForm.js
import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulated form submission (Replace with actual form submission logic)
    console.log("Form submitted:", { name, email, message });
  };

  return (
    <div className="contact-form">
      <h3> Contact Technical Support </h3>{" "}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"> Name: </label>{" "}
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email"> Email: </label>{" "}
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="message"> Message: </label>{" "}
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit"> Submit </button>{" "}
      </form>{" "}
    </div>
  );
};

export default ContactForm;
