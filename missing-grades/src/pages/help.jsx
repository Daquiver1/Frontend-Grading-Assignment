import React from 'react';
import { Link } from "react-router-dom";
import './help.css';


const help = () => {
    return (
      <div className="faq-page">
      <h2>Frequently Asked Questions</h2>
      <ul className="faq-list">
        <li className="faq-item">
          <h3>What types of grades can I report on this website?</h3>
          <p>
            You can report missing grades for any assessment in a course
            you're currently enrolled in, including midterms, finals,
            assignments, quizzes, and participation marks.
          </p>
        </li>
        <li className="faq-item">
          <h3>What information do I need to provide with my complaint?</h3>
          <p>
            Please include: course name and instructor, expected grade
            and reason, date you expected the grade, and any supporting
            evidence like the syllabus or emails with your instructor.
          </p>
        </li>
        <li className="faq-item">
          <h3>What happens after I submit a complaint?</h3>
          <p>
            Your report will be reviewed within 48 hours. You'll receive
            an email confirming receipt and an estimated response timeframe.
            The department will investigate and contact you with an update.
          </p>
        </li>
        </ul>
  
      <p>
        Have more questions? Contact us through the "Help & Support" page.
      </p>



      <footer>
      <nav>
        <Link to="/dashboard">About Us</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/help">Terms & Conditions</Link>
      </nav>
      <p>&copy; 2023 University Of Ghana. All rights reserved.</p>
    </footer>
    </div>
    );

};
export default help; 