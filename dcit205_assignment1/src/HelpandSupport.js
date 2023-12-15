import React from 'react';
import './HelpandSupport.css'

const FAQ = () => {
    return ( 
        <div className='Aider'>
            <h1 className='title'>Frequently Asked Questions (FAQ) </h1>
            <div className='inside'>
            <h3>Q :What grading scale is used?</h3>
            <p> A :We follow a standard grading scale, typically ranging from A to F, with each grade corresponding to a specific range of percentage or GPA.</p>
            <h3>Q:How can I access my grades?</h3>
            <p>A: You can access your grades by logging into your student portal and navigating to the "Grade Report" or "Academic Records" section.</p>
            <h3>Q:How often are grades updated?</h3>
            <p>A:Grades are usually updated by instructors within a reasonable timeframe after completing assessments. However, the frequency may vary depending on the course and instructor.</p>
            <h3>Q:What should I do if I believe there is an error in my grade?</h3>
            <p>A:If you believe there is an error in your grade, you should first contact the instructor of the course to discuss your concern and provide any necessary supporting documentation.</p>
            <h3>Q: Are incomplete grades displayed on the grade report?</h3>
            <p>Incomplete grades may or may not be displayed on the grade report, as it depends on the specific policies of the institution. You may need to consult with your academic advisor or registrar for more information.</p>
            </div>
        </div>


        
     );
}
 
export default FAQ;