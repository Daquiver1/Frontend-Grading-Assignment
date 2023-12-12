import React, { useState } from "react";
import "./ContactFormStyles.css";

function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Simulate a delay before resetting the state
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000); // Adjust the delay duration (in milliseconds) as needed
  };

  return (
    <div className="form-container ">
      <h1>Report Your Missing Grade</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="Course Name" />
        <input placeholder="Instructor Name" />
        <input placeholder="Expected Grade" />
        <textarea placeholder="Message" rows="4"></textarea>
        <button type="submit">Submit</button>
      </form>

      {isSubmitted && (
        <div className="submitted-popup">
          <p>Submitted!</p>
        </div>
      )}
    </div>
  );
}

export default ContactForm;
