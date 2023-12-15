// FAQSection.js
import React from "react";

const FAQSection = () => {
  return (
    <div className="faq-section">
      <h3> FAQ </h3>{" "}
      <ul>
        <li>
          <strong> Q: </strong> How are grades reported? <br />
          <strong> A: </strong> Grades are reported through the official grade
          reporting system after each semester.{" "}
        </li>{" "}
        {/* Add more FAQ items as needed */}{" "}
      </ul>{" "}
    </div>
  );
};

export default FAQSection;
