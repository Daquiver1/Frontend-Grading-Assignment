// components/HelpAndSupportPage.tsx
import React from 'react';

const HelpAndSupportPage: React.FC = () => {
  return (
    <div>
      <h2>Help and Support</h2>
      <img src="OIP.jpg" alt="Help and Support Image" />
      {/* Add FAQ section */}
      <h3>Frequently Asked Questions</h3>
      <ul>
        <li>Q1: How do I report a missing grade?</li>
        <li>Q2: How can I contact my instructor?</li>
        {/* Add more FAQs */}
      </ul>
      {/* Add contact form for technical support */}
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Student ID:
          <input type="text" name="studentId" />
        </label>
        {/* Add other form fields */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default HelpAndSupportPage;
