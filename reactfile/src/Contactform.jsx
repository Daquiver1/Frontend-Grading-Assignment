import React from 'react';
import './Contactform.css';

const Contactform = () => {
  return (
    <div className="contact-form2-container">
      <h2>Contact Us</h2>
      <form className="form2-container">
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contactform;
