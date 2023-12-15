import "./HelpDesk.css"
import React from 'react'

const HelpDesk = () => {
  return (
    <div>
       
     
        <h3 className="fhead">FREQUENTLY ASK QUESTIONS FAQs!!</h3>
        
        <div className="help-content">
           <div className="right-content">
            <h4>What is the Missing Grade Reporting System?</h4>
            <p> Students can use the Missing Grade Reporting System as a tool to keep track of and report any grades that are missing from their academic profiles. It offers an easy-to-use interface for reporting missing grades, checking grades, and corresponding with teachers or 
            the academic administration.</p>

                <h4> How do I access the Missing Grade Reporting System?</h4>
                <p> By entering your student ID and PIN on the Login screen, you can gain access to the system. In case you face any problems, kindly get in touch with our technical assistance.

</p>

                <h4>What information is available on the Dashboard page?</h4>
                <p>Your current grades are summarized on the Dashboard page, which also notifies you of any grades that are missing. It acts as a central location for tracking your academic development..</p>

                
            </div> 

            <div className="left-content">
            <h4>How do I report a missing grade?</h4>
            <p>Go to the Missing Grade Form page to report a missing grade. Provide the necessary details, such as the name of the course, the instructor's name, the anticipated grade, and a justification. In order to report the missing grade, click the submit button..</p>

            <h4>What should I do if I believe there's an error in my grade?</h4>
            <p>Contacting the instructor first is advised if you think there is a mistake in your grade. Their contact details are available on the Instructor Contact page. For more help, get in touch with the academic administration if the problem continues..</p>

            <h4>Is the email communication with instructors real?</h4>
            <p> No, for testing purposes, the email communication capability is simulated. You can use it to write notes to teachers in instead of sending them emails..</p>

            
            
            </div> 
        </div>

    </div>
  )
}

export default HelpDesk
