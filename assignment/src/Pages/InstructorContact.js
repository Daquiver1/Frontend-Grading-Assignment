import React, { useState } from "react";

const InstructorContactPage = () => {
  const [contactEmail, setContactEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!contactEmail) {
      setError(true);
      return;
    }
    setError(false);
    setMessage("Your message has been sent successfully.");
  };

  return (
    <div>
      <h1>Instructor Contact Page</h1>
      <p>Please fill out the form below to get in touch with an instructor.</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="contactEmail">Contact Email:</label>
        <input
          type="email"
          id="contactEmail"
          value={contactEmail}
          onChange={(e) => setContactEmail(e.target.value)}
          required
        />
        {error && <p className="error">Please enter a valid email address.</p>}
        <button type="submit">Submit</button>
      </form>
      {message && <p className="success">{message}</p>}
    </div>
  );
};

export default InstructorContactPage;
