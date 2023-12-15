import React from 'react';

const FAQ = () => {
  return (
    <div className='FAQs'>
      <section>
        <form className='faq-field'>
          <h2 className='faq-head'>Frequently Asked Questions (FAQ)</h2>
          <div className='faq'>
            <h3>Q: How can I report missing grades?</h3>
            <p>A: You can report missing grades through the grade reporting dashboard. Simply log in and navigate to the "Missing Grades" section.</p>
          </div>

          <div className='faq'>
            <h3>Q: Is the Grade Report website accessible on mobile devices?</h3>
            <p>A: Yes, the Grade Report website is designed to be responsive and accessible on various devices, including smartphones and tablets. </p>
          </div>
          
          <div className='faq'>
            <h3>Q: Is the information on the Grade Report website secure?</h3>
            <p>A: Yes, we prioritize the security and privacy of your academic information. Our website employs encryption protocols to safeguard your data, and we adhere to strict privacy policies to ensure the confidentiality of your grades.</p>
          </div>
          

          <div className='faq'>
            <h3>Q: How often are grades updated?</h3>
            <p>A: Grades are typically updated at the end of each grading period. However, it's advisable to check with your institution for specific update schedules.</p>
          </div>
          

          <div className='faq'>
            <h3>Q: Can I view grades from previous semesters?</h3>
            <p>A: Absolutely! The Grade Report website allows you to access grades from previous semesters. Simply choose the desired semester or academic term from the dropdown menu to view historical grade information.</p>
          </div>
          

          <div className='faq'>
            <h3>Q: Is there a deadline for reporting missing grades?</h3>
            <p>A: Yes, there is usually a deadline for reporting missing grades. Be sure to check the academic calendar or contact your institution for specific deadlines.</p>
          </div>
         

          <div className='faq'>
            <h3>Q: What happens if I don't report missing grades on time?</h3>
            <p>A: Missing grades not reported by the deadline may affect your academic record. It's crucial to submit any missing grades promptly to avoid any potential issues.</p>
          </div>
          
        </form>
      </section>
    </div>
  );
};

export default FAQ;