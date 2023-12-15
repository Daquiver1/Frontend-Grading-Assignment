import React from 'react'
import './Faq.css'
const Faq = () => {
  return (
    <div className='faq'>


        <h3 className="faq-head">Frequently Asked Questions (FAQs)</h3>

        <div className="faq-content">
           <div className="right-content">
            <h4>Q: What is the Missing Grade Reporting System?</h4>
            <p>A: The Missing Grade Reporting System is a tool designed to
                 help students track and report any grades that are not 
                 recorded in their academic profiles. It provides a 
                 user-friendly interface for viewing grades, reporting 
                 missing grades, and communicating with instructors or 
                 academic administration.t</p>

            <h4>Q: How do I access the Missing Grade Reporting System?</h4>
            <p>A: You can access the system by logging in with your student ID
                     and PIN on the Login page. If you encounter any issues,
                      please contact our technical support.</p>

            <h4>Q: What information is available on the Dashboard page?</h4>
            <p>A: The Dashboard page provides an overview of your 
                    current grades and alerts you to any missing grades.
                     It serves as a centralized hub for monitoring your 
                     academic progress.</p>


            </div> 

            <div className="left-content">
            <h4>Q: How do I report a missing grade?</h4>
            <p>A: To report a missing grade, navigate to the Missing Grade Form
                 page. Fill out the required information, including the 
                 course name, instructor name, expected grade, and an 
                 explanation. Click the submit button to report the 
                 missing grade.</p>

            <h4>Q: What should I do if I believe there's an error in my grade?</h4>
            <p>A: If you believe there's an error in your grade, 
                we recommend reaching out to the instructor first. 
                You can find their contact information on the
                 Instructor Contact page. If the issue persists, 
                 contact the academic administration for further 
                 assistance.</p>

            <h4>Q: Is the email communication with instructors real?</h4>
            <p>A: No, the email communication feature is simulated
                 for testing purposes. It allows you to compose 
                 messages to instructors without sending actual emails.</p>

            </div> 
        </div>


    </div>
  );
};

export default Faq;