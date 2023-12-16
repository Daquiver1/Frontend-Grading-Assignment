import React, { useState } from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './PageFooter';

const HelpAndSupportPage = () => {
  const navigate = useNavigate();
  const [contactFormData, setContactFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);

  const handleContactFormChange = (e) => {
    const { name, value } = e.target;
    setContactFormData({ ...contactFormData, [name]: value });
  };

  const handleContactFormSubmit = (e) => {
    e.preventDefault();
    alert('Simulating sending contact form:', contactFormData);
  };

  const handleLogoutClick = () => {
    setShowLogoutConfirmation(true);
  };

  const handleLogoutConfirmation = (confirmed) => {
    setShowLogoutConfirmation(false);
    if (confirmed) {
      // Redirect to the LoginPage
      navigate('/'); // Update the path based on your route configuration
    }
  };

  return (
    <div>
      <Header />
      <div className="help-and-support-page">

        {/* FAQ Section */}
        <section className="faq-section">
          <h2>Frequently Asked Questions</h2>

          <div className="faq-item">
            <h3>Q: How are grades reported?</h3>
            <p>A: Grades are reported through the online grading system.</p>
          </div>

          <div className="faq-item">
            <h3>Q: When are grades typically available?</h3>
            <p>A: Grades are usually available within two weeks after the end of the semester.</p>
          </div>

          <div className="faq-item">
            <h3>Q: Can I view my grades on a mobile device?</h3>
            <p>A: Yes, the online grading system is accessible on both desktop and mobile devices.</p>
          </div>

          <div className="faq-item">
            <h3>Q: What should I do if I believe there is an error in my grades?</h3>
            <p>
              A: If you believe there is an error in your grades, please contact your instructor
              directly or reach out to the academic services department.
            </p>
          </div>
        </section>

        {/* Contact Form */}
        <section className="contact-form-section">
          <h2>Contact Technical Support</h2>
          <form onSubmit={handleContactFormSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={contactFormData.name}
              onChange={handleContactFormChange}
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={contactFormData.email}
              onChange={handleContactFormChange}
              required
            />

            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={contactFormData.message}
              onChange={handleContactFormChange}
              required
            ></textarea>

            <button type="submit">Submit</button>
          </form>
        </section>

        {/* Logout Icon */}
        <div className="logout-icon" onClick={handleLogoutClick}>
          <FaSignOutAlt size={30} />
        </div>

        {showLogoutConfirmation && (
          <div className="logout-confirmation-msg">
            <p>Are you sure you want to log out?</p>
            <button onClick={() => handleLogoutConfirmation(true)}>Yes</button>
            <button onClick={() => handleLogoutConfirmation(false)}>No</button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default HelpAndSupportPage;
