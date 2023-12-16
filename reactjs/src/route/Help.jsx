// src/components/HelpAndSupport.js
import React from 'react';
import './help.css';

const HelpAndSupport = () => {
 return (
    <div className="containers">
      <h1>Help and Support</h1>
      <p>
        Need assistance with UG Legon Grading System? Check out the solutions below or contact our support team:
      </p>
      <ul>
        <li>
          <strong>Issue 1:</strong> I can't access my virtual school.
          <ul>
            <li>Solution 1: Verify your email address and password.</li>
            <li>Solution 2: If you have multiple virtual schools, make sure you're logging into the correct one.</li>
          </ul>
        </li>
        <li>
          <strong>Issue 2:</strong> I'm having trouble submitting an assignment.
          <ul>
            <li>Solution 1: Check if you have internet access.</li>
            <li>Solution 2: Make sure your assignment submission window is still open.</li>
          </ul>
        </li>
      </ul>
      <p>
        If you still need help, feel free to reach out to our support team via email at support@UG Legon.com or phone at +1-123-456-7890.
      </p>
    </div>
 );
};

export default HelpAndSupport;