import React from 'react';

function InstructorContactPage() {
  return (
    <div>
      <h1>Instructor Contact</h1>
      <p>List of instructors with contact details:</p>
      <ul>
        <li>Instructor 1: Email - instructor1@example.com, Phone - 123-456-7890</li>
        <li>Instructor 2: Email - instructor2@example.com, Phone - 123-456-7890</li>
        <li>Instructor 3: Email - instructor3@example.com, Phone - 123-456-7890</li>
      </ul>
      <p>Send a simulated email to the instructor:</p>
      <form>
        <label>
          To:
          <input type="email" />
        </label>
        <br />
        <label>
          Subject:
          <input type="text" />
        </label>
        <br />
        <label>
          Message:
          <textarea />
        </label>
        <br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default InstructorContactPage;
