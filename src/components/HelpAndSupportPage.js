import React from 'react';
import Footer from './FooterCode'; 
import './HelpAndSupport.css';

const HelpAndSupportPage = () => {
  return (
    <div>
        <div className="help-support-container">
      <h2>Help and Support</h2>

      <section className="faqs-section">
        <h3>Frequently Asked Questions, FAQs</h3>
        <div className="faq-item">
          <h4>How do I find my GPA?</h4>
          <p>Login to your Mis web with your student ID and your password, locate student enquiry, click on it and you'll see your GPA displayed.</p>
        </div>
        <div className="faq-item">
          <h4>What are some of the things I should look out for when you are coming to the University of Ghana</h4>
          <p>Better look for accomodation, because this place sucks. The next thing you should also look out for is that this life sucks and I feekl like I am almost done with this work at this very late hour...Wow i just can't believe I have reached this stage that I am fooling that much Baba.</p>
          <p>The CS department, I forgot to tell you that, don't come here, life here sucks a lot, they will give you plenty assignments, and they will expect you to finish them in a limited time space. Who does that?</p>
        </div>
      </section>

      <section className="contact-section">
        <h3>Contact Us</h3>
        <p>For support, please contact us at:</p>
        <p>Email: universityofghana@gmail.com</p>
        <p>Phone:  +233 (0) 59 509-4208</p>
      </section>

      <section className="user-guides-section">
        <h3>User Guides and Tutorials</h3>
        <iframe width="900" height="315" src="https://www.youtube.com/embed/_PS819PLCLw?si=gvAXVsmzPUOwHXvU&amp;clip=UgkxdQ1mOhso8vs9mCMj-L47SjFjCVfX44oT&amp;clipt=EJ3DBhiq-Ac" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        {/* Placeholder for user guides */}
        <p>Explore our user guides and tutorials to get started.</p>
        {/* Add links or content for user guides */}
      </section>

      {/* Troubleshooting Section */}
      <section className="troubleshooting-section">
        <h3>Troubleshooting</h3>
        {/* Placeholder for troubleshooting content */}
        <p>Encountering issues? Follow our troubleshooting guide.</p>
        {/* Add troubleshooting steps or content */}
      </section>

      {/* Feedback Forms Section */}
      <section className="feedback-section">
        <h3>Feedback</h3>
        {/* Placeholder for feedback forms */}
        <p>We value your feedback. Share your thoughts with us.</p>
        {/* Add feedback forms or links */}
      </section>

      {/* Live Chat Section */}
      <section className="live-chat-section">
        <h3>Live Chat Support</h3>
        {/* Placeholder for live chat */}
        <p>Chat with our support team in real-time.</p>
        {/* Add live chat component or link */}
      </section>

      {/* System Status Section */}
      <section className="system-status-section">
        <h3>System Status</h3>
        {/* Placeholder for system status */}
        <p>Check the current status of our system.</p>
        {/* Add system status information */}
      </section>

      {/* Additional Resources Section */}
      <section className="additional-resources-section">
        <h3>Additional Resources</h3>
        {/* Placeholder for links to additional resources */}
        <p>Explore more resources to enhance your experience.</p>
        {/* Add links or content for additional resources */}
      </section>

      {/* Accessibility Information Section */}
      <section className="accessibility-section">
        <h3>Accessibility Information</h3>
        {/* Placeholder for accessibility information */}
        <p>Learn about accessibility features for users with disabilities.</p>
        {/* Add accessibility information */}
      </section>

      {/* Feedback and Survey Forms Section */}
      <section className="feedback-survey-section">
        <h3>Feedback and Surveys</h3>
        {/* Placeholder for feedback and survey forms */}
        <p>Help us improve by providing your feedback through surveys.</p>
        {/* Add feedback and survey forms or links */}
      </section>

      {/* Footer Component */}
      
    </div>
    <Footer />
    </div>
    
  );
};

export default HelpAndSupportPage;
