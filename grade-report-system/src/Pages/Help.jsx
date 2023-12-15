import './Help.css';
import React, { useState } from 'react';



const Help = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  const [popupStyle, Show] = useState("main")

    const popUp =() => {
        Show ("sent-popup")
        setTimeout(()=> Show("main"), 3200)}
     
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

            <div className="faq">

<button className="button-1" onClick={toggleFAQ}>
    Try contacting my instructor but to no avail?

    <i className="fa-solid fa-chevron-down"></i>
</button>
{isOpen && (
        <div className="answer">
            <p>We're really sorry for any incoveniece with regards to this issue. <br />Emails of Instructors provided on our
            pages are very active accounts that definetely provide quick responses. <br /> Kindly 
            resend the messages but closely taking a look at the recipient address to prevent any form of typo. <br />
            Contact us if you're facing any other issue. 
            </p>
</div>
)}
            

            </div>
            <div className="faq">

<button className="button-1" onClick={toggleFAQ}>
    Logging in has become a problem, any solution?

    <i className="fa-solid fa-chevron-down"></i>
</button>
{isOpen && (
        <div className="answer">
            <p>
                Dear user, you might be experiencing this issue due to wrong input of PIN or Student ID. <br />Take note that IDs are not changeable.
              <br />  If this issue persists after changing your password, send us a message in the message box below.
            </p>
</div>
)}
            </div>

            <div className="faq">

<button className="button-1" onClick={toggleFAQ}>
    Where do we find our Instructors?

    <i className="fa-solid fa-chevron-down"></i>
</button>
{isOpen && (
        <div className="answer">
            <p>
                With regards to this particular question, I would contact the Instructor on the 'Contact Instructor' page as this information remains confidential. <br />
                Thank You.
            </p>
</div>
)}
            </div>
        </div>

        <footer className="Foote">

            <input type="text" placeholder="Leave a message" required/>
            <button type="button" onClick={popUp}>Send</button>
            <div className={popupStyle}>
                <h3>Message Sent !

                </h3>
                

            </div>
            <p>&copy; Copyright, Grade-Report-System &middot; 2023</p>
            </footer>

            
            
        </div>
     );
}
 
export default Help;

