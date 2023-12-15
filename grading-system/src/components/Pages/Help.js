import React from "react";

const Help = () => {
  return (
    <>
      <div className="Help">
        <div className="faq-wrapper">
          <h1>Frequently Asked Questions</h1>
          <ol>
            <li>
              &#x2713;&nbsp;&nbsp; &nbsp;
              <strong>Question:</strong> How do I access my missing grade
              report?
              <br />
              &nbsp;&nbsp; &nbsp;
              <strong>Answer:</strong> To access your missing grade report, log
              in to your account and navigate to the{" "}
              <span className="span1">Grade Reports</span> section
            </li>

            <li>
              &#x2713;&nbsp;&nbsp; &nbsp;
              <strong>Question:</strong> Can I submit a missing grade report for
              multiple courses at once? <br />
              &nbsp;&nbsp; &nbsp;
              <strong>Answer:</strong> Yes, you can submit missing grade reports
              for multiple courses simultaneously. Use the provided form to
              include details for each course.
            </li>

            <li>
              &#x2713;&nbsp;&nbsp; &nbsp;
              <strong>Question:</strong> What should I do if my submitted
              missing grade report is not updated promptly? <br />
              &nbsp;&nbsp; &nbsp;
              <strong>Answer:</strong> If your missing grade report is not
              updated within the expected timeframe, please allow a few
              additional days. If the issue persists, contact our support team.
            </li>

            <li>
              &#x2713;&nbsp;&nbsp; &nbsp;
              <strong>Question:</strong> Can I edit or withdraw a submitted
              missing grade report? <br />
              &nbsp;&nbsp; &nbsp; <strong>Answer:</strong> Once a missing grade
              report is submitted, edits or withdrawals are not possible.
              Double-check your information before submission.
            </li>

            <li>
              &#x2713;&nbsp;&nbsp; &nbsp;
              <strong>Question:</strong> How long does it take for missing grade
              reports to be processed?
              <br />
              &nbsp;&nbsp; &nbsp; <strong>Answer:</strong> Processing times
              vary, but we strive to review and update missing grade reports
              within 5 business days. Please be patient, and thank you for your
              understanding.
            </li>
          </ol>
        </div>
        <br /> <br /> <br />
      </div>
      <div className="team">
        <h3>Contact Our Support team</h3>
        <form className="form1">
          <div className="support-input-box">
            <input type="text" placeholder="Name" required />
          </div>
          <div className="support-input-box">
            <input type="email" placeholder="Email" required />
          </div>

          <div className="support-text-area">
            <textarea type="message" placeholder="Brief Summary of issue" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Help;
