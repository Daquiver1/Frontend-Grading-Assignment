import React from 'react';

function InstructorsContactPage() {
  const sendMockEmail = (instructorName, instructorEmail) => {
    // Simulated email sending functionality mockup as requested in assignment
    const confirmationMessage = document.getElementById('emailConfirmation');
    confirmationMessage.classList.remove('hidden');
    confirmationMessage.textContent = `Your message has been sent to ${instructorName} (${instructorEmail})!`;
    setTimeout(() => {
      confirmationMessage.classList.add('hidden');
    }, 3000);
  };

  return (
    <div>
      <header>
        <b>CONTACT YOUR INSTRUCTORS HERE</b>
      </header>

      <main>
        <section className="instructor-contact-section">
          <h2>Instructor Contact</h2>

          <ul className="instructor-list">
            <li>
              <h3>Mr. Danquiver A.</h3>
              <p>Contact: +233 50 123 4567</p>
              <p>Email: danquivera@gmail.com</p>
              <button onClick={() => sendMockEmail('Mr. Danquiver A', 'danquivera@gmail.com')}>
                Send Email
              </button>
            </li>
            <li>
              <h3>Dr. Michael Soli</h3>
              <p>Contact: +233 55 987 6543</p>
              <p>Email: soliamichael@yahoo.com</p>
              <button onClick={() => sendMockEmail('Dr. Michael Soli', 'soliamichael@yahoo.com')}>
                Send Email
              </button>
            </li>
          </ul>

          <p id="emailConfirmation" className="hidden">
            Your message has been sent to the instructor!
          </p>
        </section>
      </main>

      <footer>
        <b>MISSING GRADE REPORTING SYSTEM</b>
      </footer>
    </div>
  );
}

export default InstructorsContactPage;