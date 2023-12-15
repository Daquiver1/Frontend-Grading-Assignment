import React, { useState } from 'react';
import './reportingform.css';
import { useEffect } from 'react';

const Form = () => {
  const [confirmationMessage, setConfirmationMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    setConfirmationMessage('Form submitted successfully!');
  };

  return (
    <div className="loginsect">
      <div className="text">
        <form action="/action_page.php" method="post" onSubmit={handleSubmit}>
          <div className="container">
            <label>
              <b>COURSE NAME</b>
            </label>
            <input type="text" placeholder="Enter course name" name="uname" required />

            <label>
              <b>INSTRUCTOR NAME</b>
            </label>
            <input
              type="text"
              placeholder="Enter name of course instructor"
              name="instructor"
              required
            />

            <label>
              <b>EXPECTED GRADE</b>
            </label>
            <input type="text" placeholder="Enter expected grade" name="grade" required />

            <label>
              <b>EXPLANATION</b>
              <textarea className="textarea" placeholder="Enter explanation" required></textarea>
            </label>

            <button type="submit">Submit</button>
            {confirmationMessage && <p>{confirmationMessage}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
