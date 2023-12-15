import React from "react";
import "./HelpandSupport.css"; // Create a CSS file for styling

function HelpandSupport() {
  const faqData = [
    {
      question: "1. How do I report a missing grade?",
      answer: "You can report a missing grade through the Grade Reporting section on your dashboard.",
    },

    {
      question: "2. Is there a specific deadline for reporting a missing grade?",
      answer: "Yes, we recommend reporting missing grades within one week of the grade release.",
    },
    {
      question: "3. What information do I need to provide when reporting a missing grade?",
      answer: "Include details such as the course code, instructor's name, and any relevant information about the assignment or exam.",
    },
    {
      question: "4. Can I report a missing grade for any course?",
      answer: "Yes, you can report a missing grade for any course listed on your dashboard.",
    },
    {
      question: "5. How will I be notified about the status of my missing grade report?",
      answer: "You will receive email notification about it. You can also checkup on the grading sysytem website",
    },
    {
      question: "6. How long does it take to process a missing grade report?",
      answer: "The processing time for missing grade reports may vary. You will receive updates on the status of your report.",
    },
    {
      question: "7. When should I report a missing grade?",
      answer: "It's advisable to report a missing grade as soon as you notice it, ensuring timely resolution.",
    },
    {
      question: "8. Can I report multiple missing grades at once?",
      answer: "Yes, once you notice it, you can report it.",
    },
    // Add more FAQ items as needed
  ];

  return (
    <div className="dashboard">
      <div className="tab2">
      <section className="faq-section">
        <h2>Frequently Asked Questions (FAQ)</h2>
        <div className="faq-list">
          {faqData.map((item, index) => (
            <div key={index} className="faq-item">
              <div className="question">{item.question}</div>
              <div className="answer">{item.answer}</div>
            </div>
          ))}
        </div>
      </section>
      </div>

      <div className="tab3">
      <section className="contact-section">
        <h2>Contact Technical Support</h2>
        <div className="contact-buttons">
          <button className="contact-button email">E-mail</button>
          <button className="contact-button twitter">Twitter</button>
          <button className="contact-button facebook">Facebook</button>
          <button className="contact-button telephone">Telephone</button>
        </div>
        <form class="form">
  <br></br><h2>CONTACT US</h2>
  <p type="Name:"><input placeholder="Write your name here.."></input></p>
  <p type="Email:"><input placeholder="Let us know how to contact you back.."></input></p>
  <p type="Message:"><input placeholder="What would you like to tell us.."></input></p><br></br><br></br>
  <button>Send Message</button>
  <div>
    <br></br><span class="fa fa-phone"></span>+233 557 6115
    <span class="fa fa-envelope-o"></span> dnalaryea003@st.ug.edu.gh
  </div>
</form>
      </section>
      </div>
      
    </div>
  );
}

export default HelpandSupport;
