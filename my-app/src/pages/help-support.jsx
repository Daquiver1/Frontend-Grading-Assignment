import React, { useState } from 'react';

const HelpSupport = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactForm({ ...contactForm, [name]: value });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactForm);
    setContactForm({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div>
      <h2>Help and Support</h2>
      <section>
        <h3>FAQs for Grade Reporting</h3>
        <ul>
          <li>
            <h4>How do I report a missing grade?</h4>
            <p>
              To report a missing grade, you can navigate to the Missing Grade
              Form page and fill out the required information.
            </p>
          </li>
          <li>
            <h4>Why haven't my grades been updated?</h4>
            <p>
              Grades are typically updated by instructors within a certain
              timeframe. If your grades haven't been updated yet, please be
              patient and check back later.
            </p>
          </li>

        </ul>
      </section>

      <section>
        <h3>Contact Technical Support</h3>
        <form onSubmit={handleContactSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={contactForm.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={contactForm.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={contactForm.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default HelpSupport;