import React from 'react';
import '../components/styles/FAQs.css';

const AppHelp = () => {
  return (
    <div className="help-support-container">
      <h2>Help and Support</h2>
      <div className="faq-container">
        <h3>Frequently Asked Questions</h3>
     
        <div className="faq-item">
          <h4>How to report a missing grade?</h4>
          <p>You can report a missing grade by filling out the form on our 'Report Missing Grade' page.</p>
        </div>
        <div className="faq-item">
          <h4>How long does it take to update my grades?</h4>
          <p>It typically takes 1-2 business days for grades to be updated. If it takes longer, please contact us.</p>
        </div>
        <div className="faq-item">
          <h4>Who should I contact for technical support?</h4>
          <p>You can contact our technical support team by filling out the form in the 'Contact Us' section on this page.</p>
        </div>
    
      </div>
      <div className="contact-form-container">
        <h3>Contact Us for any Technical Support</h3>
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <label>
            Description:
            <textarea name="description" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default AppHelp;
