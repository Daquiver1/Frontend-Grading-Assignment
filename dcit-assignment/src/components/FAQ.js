import React from 'react';

const FAQ = () => {
  return (
    <div className='FAQs'>
      <div className='section-faq'>
        <form className='faq-field'>
          <h2 className='faq-head'>Frequently Asked Questions (FAQ)</h2>
          <div className='faq'>
            <h3>Q: How can I report missing grades?</h3>
            <p>A: You can report missing grades through the grade reporting dashboard. Simply log in and navigate to the "Missing Grades" section.</p>
          </div>

          <div className='faq'>
            <h3>Q: Can I edit my reported grades?</h3>
            <p>A: No, once grades are submitted, they cannot be edited. Please ensure the accuracy of your grades before submission.</p>
          </div>
          
          <div className='faq'>
            <h3>Q: Can I view my entire grade history?</h3>
            <p>A: Yes, you can view your complete grade history on the "Grade History" page. It provides a detailed overview of all your grades over time.</p>
          </div>
          

          <div className='faq'>
            <h3>Q: How often are grades updated?</h3>
            <p>A: Grades are typically updated at the end of each grading period. However, it's advisable to check with your institution for specific update schedules.</p>
          </div>
          

          <div className='faq'>
            <h3>Q: Can I request additional information about a specific grade?</h3>
            <p>A: Yes, you can request additional information by contacting your instructor directly. They can provide clarification and details about your grades.</p>
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
      </div>
    </div>
  );
};

export default FAQ;