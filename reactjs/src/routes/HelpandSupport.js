import React from 'react';
import './HelpandSupport.css';

const HelpandSupport = () => {
 return (
    <div className="help-and-support">
      
      <h2>Frequently Asked Questions</h2>

      <div className="faq-section">
        <h3>How do I contact support?</h3>
        <p>
          You can reach our support team through the contact form on our website or via email at support@example.com.
        </p>
      </div>

      <div className="faq-section">
        <h3>How do I report a bug?</h3>
        <p>
          If you encounter a bug while using our platform, please report it using the "Report a Bug" link in the footer.
        </p>
      </div>

      <div className="faq-section">
        <h3>What is the grading scale?</h3>
        <p>
          Our grading scale ranges from A (90-100%) to F (50-59%). It is based on a standard grading curve, ensuring consistency across different courses.
        </p>
      </div>

      <div className="faq-section">
        <h3>Can I see my past grades?</h3>
        <p>
          Yes, you can access your past grades by logging into your account and navigating to the "Grades" tab.
        </p>
      </div>
      <div className="faq-section">
        <h3>Can I customize my grade report?</h3>
        <p>
          Yes, you can customize your grade report by logging into your account and navigating to the "Grades" tab. Here, you can select specific grading categories or assessments to include in your report.
        </p>
      </div>

      

      

      {/* Add more FAQ sections as needed */}
    </div>
 );
};

export default HelpandSupport;