import React from 'react';
import '../Css/HelpAndSupportPage.css';
import SideNavBar from "./SideNavBar";

const HelpAndSupportPage = () => {
  return (
    <div className="content">
    <SideNavBar />
    <div className="help-and-support-page-container">
      <header>
        <h1>Help and Support</h1>
      </header>

      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <ul>
          <li>
            <strong>Q:</strong> How can I report a missing grade?
            <br />
            <strong>A:</strong> You can use the Missing Grade Form on the Missing Grade Form Page to report it.
          </li>
          <li>
            <strong>Q:</strong> How to contact technical support?
            <br />
            <strong>A:</strong> Visit the Contact Page to send a message to our support team.
          </li>
          {/* Add more FAQ items as needed */}
        </ul>
      </section>

      <section className="contact-section">
        <h2>Contact Technical Support</h2>
        <p>
          If you have additional questions or need technical assistance, please fill out the form on the{' '}
          <a href="/contact">Contact Page</a>.
        </p>
      </section>
    </div>
    </div>
  );
};

export default HelpAndSupportPage;
