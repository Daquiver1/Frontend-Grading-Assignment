import './Help.css';
import React, { useState } from 'react';



const Help = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };
    
    return ( 
        
        <div>
          
            
            <div className="Cover">

            <h1>Frequently Asked Questions</h1>

            <div className="faq">

                <button className="button-1" onClick={toggleFAQ}>
                    How do I use this system?

                    <i className="fa-solid fa-chevron-down"></i>
                </button>
                {isOpen && (
            <div className="answer">
         <p>Please visit the homepage by the clicking on 'home' at the navbar <br /> And then login to be able to use the system</p>
            </div>
            )}
                </div>


                <div className="faq">

<button className="button-1" onClick={toggleFAQ}>
    How do i detect a missing grade and make a report?

    <i className="fa-solid fa-chevron-down"></i>
</button>
{isOpen && (
        <div className="answer">
            <p>Let's provide you with a simple way to do this. Probably you have been able to log in. <br />
            Then directly click on the 'missing grade form' on the navbar. Fill in the forms with your details and then submit. <br />
            A follow-up can be done after that on the 'Contact your Instructor' page.
            </p>
</div>
)}
            

            </div>

        </div>
        </div>
     );
}
 
export default Help;

