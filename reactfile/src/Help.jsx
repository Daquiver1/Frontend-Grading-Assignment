import NavBar from './NavBar';

import './Help.css';
import  Contactform from './Contactform';

function Help(){


  return(
      <>
      <NavBar/>
    
    <div 
     style={{
      backgroundImage: 'url("/ash1.jpg")',
    }} className='container-help'>
    
       <div className='Question'>Do You have Questions?</div>
      <div className='Question-section'>We have answers (well most of the times!)</div>
      <div className='Question-item'>Below, you may find answers to the most questions you may have 
        regarding grade reporting. If you still cannot find the answer
         you are looking for, Just Contact Us! by filling the Contact form. 
         </div>
    
      <img className="help-image"  src="/questions.png"></img>

      <div className="FAQs">

                <div className="faq1">
                <h3>1. How do I report a missing grade?</h3>
        <p>
          To report a missing grade, you can use our online form available on the
          dashboard. Navigate to the "Report Missing Grade" section and fill in the
          required details.
        </p>

        <h3>2. When will missing grades be resolved?</h3>
        <p>
          The resolution time for missing grades depends on various factors. Our
          support team will review your report and work towards a timely resolution.
        </p>

        </div>


                <div className="faq">
                <h3>3. Can I report multiple missing grades at once?</h3>
        <p>
          Yes, you can report multiple missing grades in a single submission. Make sure
          to provide accurate information for each missing grade in the form.
        </p>

        <h3>4. How will I be notified once the missing grade is resolved?</h3>
        <p>
          You will receive an email notification once the missing grade is resolved.
          Please ensure that your contact information is up-to-date.
        </p>

        </div>

                    </div>
                </div>
      
               <Contactform/>
      
    
     </>
  );

}
 

export default Help;