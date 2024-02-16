


import './help.css';

import ContactForm from './Contact';










function Help() {
  return (
   <div>
    <br></br>
    <br></br>
    <h1>Frequently Asked Questions - Grade Reporting</h1>
    <div className='nav'> 

<div className="faq-item">
  <h3>How can I view my grades?</h3>
  <p>
    To view your grades, log in to your account and navigate to the "Grades" section.
    You will find a detailed breakdown of your grades for each course there.
  </p>
</div>

<div className="faq-item">
  <h3>When are grades typically updated?</h3>
  <p>
    Grades are usually updated by instructors within a week of completing an assignment or exam.
    However, specific timelines may vary, so it's recommended to check regularly for updates.
  </p>
</div>

<div className="faq-item">
  <h3>What should I do if I believe there is an error in my grade?</h3>
  <p>
    If you believe there is an error in your grade, contact your instructor as soon as possible.
    They will be able to review your concern and make any necessary corrections.
  </p>
</div>

<div className="faq-item">
  <h3>How can I download a copy of my grade report?</h3>
  <p>
    To download your grade report, go to the "Grades" section and look for a "Download" or "Print" option.
    This will allow you to save or print a copy of your grade report for your records.
  </p>
</div>

<div className="faq-item">
  <h3>Is there a way to receive grade notifications?</h3>
  <p>
    Yes, you may enable grade notifications in your account settings.
    This way, you'll receive alerts or emails whenever there are updates to your grades.
  </p>
</div></div>
<br></br>
<br></br>

<br></br>
<br></br>
<h1>Contact form for technical support</h1>
<ContactForm/>









   </div>
   
  
  


    
    
    
  );
}

export default Help;
