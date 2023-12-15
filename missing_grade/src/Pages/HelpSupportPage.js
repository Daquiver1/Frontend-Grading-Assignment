import React from "react";
import './Styles/help.css'

const HelpSupportPage = () => {
    return ( 
        <div className="faq">
            <h2>FAQ</h2>
            <div className="faqcontent">
            <h3>Q: How can I access my grades?</h3>
            <p>You can access your grades by simply logging in.</p>
            <h3>Q: What grading scale is used?</h3>
            <p>We follow a standard grading scale, typically ranging from A to F, with each grade corresponding to a specific range of percentage or GPA.</p>
            <h3>Q: How often are grades updated?</h3>
            <p>Grades are usually updated by instructors within a reasonable timeframe after completing assessments. However, the frequency may vary depending on the course and instructor.</p>
            <h3>Q: What should I do if there is an error in my grade?</h3>
            <p>If you believe there is an error with your grade, upon viewing your grades by semester click on the button that talks about problems with your grade and fill the form.</p>
            </div>
        </div>
     );
}
 
export default HelpSupportPage;