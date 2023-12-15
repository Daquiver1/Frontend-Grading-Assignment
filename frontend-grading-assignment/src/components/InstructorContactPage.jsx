import React from 'react';

function InstructorContactPage() {
 const handleEmail = () => {
    // Handle email sending logic here (mock-up, no real email)
    console.log('Simulated email sent to the instructor.');
 };

 return (
    <div className="container">
      <h2 className="contact-title">Instructor Contact</h2>
      <ul className="instructor-list">
        <li>
          <p className="instructor-name">Instructor 1</p>
          <p className="instructor-email">instructor1@email.com</p>
          <button onClick={handleEmail} className="contact-button">Contact</button>
        </li>
        <li>
          <p className="instructor-name">Instructor 2</p>
          <p className="instructor-email">instructor2@email.com</p>
          <button onClick={handleEmail} className="contact-button">Contact</button>
        </li>
        {/* Add more instructors here */}
      </ul>
      {/* Navigation links to other pages (Dashboard, Grade Report, Missing Grade Form) */}
    </div>
 );
}

export default InstructorContactPage;