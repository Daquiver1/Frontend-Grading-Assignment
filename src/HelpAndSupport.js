// HelpAndSupport.js
import React, { useState } from 'react';

const HelpAndSupport = () => {
  const [contactFormData, setContactFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Clear errors when user starts typing
    setFormErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  const validateForm = () => {
    let errors = {};
    if (!contactFormData.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!contactFormData.email.trim()) {
      errors.email = 'Email is required';
    }
    if (!contactFormData.message.trim()) {
      errors.message = 'Message is required';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0; // Return true if there are no errors
  };

  const handleSubmit = () => {
    const isValid = validateForm();
    if (isValid) {
      // Simulate form submission (replace with actual API call or form handling logic)
      // For demonstration purposes, just show a confirmation message
      setSubmissionStatus('Message submitted successfully!');
      // Clear form data after submission
      setContactFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <div>
      <h1>Help and Support</h1>

      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <ul>
          <li>Q: How can I report a missing grade?</li>
          <p>A: Navigate to the "Missing Grade Form" page and fill out the required information.</p>
          <li>Q: Can I contact my instructor through this platform?</li>
          <p>A: Yes, visit the "Instructor Contact" page to find your instructor's contact details.</p>
          {/* Add more FAQ items as needed */}
        </ul>
      </section>

      <section className="contact-form-section">
        <h2>Contact Technical Support</h2>
        <form>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={contactFormData.name}
              onChange={handleInputChange}
            />
            {formErrors.name && <span className="error-message">{formErrors.name}</span>}
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={contactFormData.email}
              onChange={handleInputChange}
            />
            {formErrors.email && <span className="error-message">{formErrors.email}</span>}
          </div>

          <div className="form-group">
            <label>Message:</label>
            <textarea
              name="message"
              value={contactFormData.message}
              onChange={handleInputChange}
            />
            {formErrors.message && <span className="error-message">{formErrors.message}</span>}
          </div>

          <button type="button" onClick={handleSubmit}>
            Submit
          </button>
        </form>

        {submissionStatus && <p className="confirmation-message">{submissionStatus}</p>}
      </section>
    </div>
  );
};

export default HelpAndSupport;
