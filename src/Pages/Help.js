import React from "react";
import { useState } from "react";
import "../Styles/Help.css";

export const Help = () => {
  const [contactFormData, setContactFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactFormData({ ...contactFormData, [name]: value });
  };

  const handleContactFormSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., API request)
    console.log("Contact Form Submitted:", contactFormData);
    // Reset form data after submission
    setContactFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="he-container">
      <h1>Help and Support</h1>

      {/* FAQ Section */}
      <div>
        <div className="FAQ">
          <h2>FAQs - Grade Reporting</h2>
          <form action="">
            <input placeholder="Search" className="search-bar" type="text" />
            <button className="search-btn">Search</button>
          </form>
          <h3>Q: How can I view my grades?</h3>
          <p>
            A: You can view your grades by logging into your account and
            navigating to the "Report" section.
          </p>
          <h3>Q: How can I make a report?</h3>
          <p>
            A: You can make a report by logging into your account and navigating
            to the "Missing-grade" section.
          </p>
        </div>
      </div>

      <section className="contact-form">
        <h2>Contact Technical Support</h2>

        <form className="main-sec" onSubmit={handleContactFormSubmit}>
          <input
            className="input-box"
            placeholder="Name"
            type="text"
            id="name"
            name="name"
            value={contactFormData.name}
            onChange={handleInputChange}
            required
          />

          <input
            className="input-box"
            placeholder="Email"
            type="email"
            id="email"
            name="email"
            value={contactFormData.email}
            onChange={handleInputChange}
            required
          />

          <textarea
          className="text-area"
          placeholder="What do you need help with?"
            id="message"
            name="message"
            value={contactFormData.message}
            onChange={handleInputChange}
            required
          />

          <button className="submit" type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
};
