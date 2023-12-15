import React from 'react';

function HelpSupportPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    showConfirmationMessage();
  };

  const showConfirmationMessage = () => {
    document.getElementById('contactConfirmation').classList.remove('hidden');
    setTimeout(() => {
      document.getElementById('contactConfirmation').classList.add('hidden');
    }, 3000);
  };

  return (
    <div>
      <header>
        <b>FAQS & TECHNICAL SUPPORT PAGE</b>
      </header>

      <main>
        <section className="help-support-section">
          <h2>Help & Support</h2>

          <div className="faq-section">
            <h3>Frequently Asked Questions</h3>
            <ul className="faq-list">
              <li>
                <h4>How can I report a missing grade?</h4>
                <p>You can report a missing grade by navigating to the 'MISSING GRADE FORM' page and filling out the form with the necessary details.</p>
              </li>
              <li>
                <h4>Where can I view my grades?</h4>
                <p>You can view your grades on the 'GRADE REPORT' page. It displays a detailed overview of all your course grades.</p>
              </li>
            </ul>
          </div>

          <div className="contact-form">
            <h3>Contact Technical Support</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="fullName">Full Name:</label>
                <input type="text" id="fullName" name="fullName" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="4" required></textarea>
              </div>
              <button type="submit">Send</button>
            </form>
            <p id="contactConfirmation" className="hidden">Your message has been sent to technical support!</p>
          </div>
        </section>
      </main>

      <footer>
        <b>MISSING GRADE REPORTING SYSTEM BY THE 11112468Company</b>
      </footer>
    </div>
  );
}

export default HelpSupportPage;
