import React, { useState } from 'react';
const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = () => {
    // Check if all fields are filled
    if (!name || !email || !message) {
      alert('Please fill in all required fields.');
      return;
    }

    // Simulate a server request delay
    setIsSubmitting(true);
    setTimeout(() => {
      // Handle form submission logic (e.g., send data to a server)
      console.log('Form submitted:', { name, email, message });
      // Add your form submission logic here

      // Simulate successful submission
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 1000);
  };

  return (
    <div className="contact-form">
      <h2>Contact Technical Support</h2>
      {submitSuccess ? (
        <p className="success-message">Your message has been sent successfully!</p>
      ) : (
        <form>
          <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </label>
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>
          <label>
            Message:
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
          </label>
          <button type="button" onClick={handleSubmit} disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
