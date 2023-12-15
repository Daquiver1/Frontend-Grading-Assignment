import React from "react";
import "./Help.css";

const Help_and_suport=()=>{
    return(
        <div 
         className="ui raised very padded text container segment"
         style={{marginTop:'100px'}}
        >
        <div className="welcome2">
            <p >
                <h2> FAQS</h2>

                <h3> What is the purpose of the system?</h3>
               <p> The Missing Grade Report System is a tool designed to address and manage cases where student grades are not available or marked as missing in the grading system.</p>
            </p>
           <p>
            <h3> How do I access the Missing Grade Report System?</h3>
            You can access the system through  the designated platform provided by the educational institution.
            </p>

            <p>
            <h3>Can I view which grades are marked as missing?</h3>
            Yes, the system is transparent. You can view your grades, including those marked as missing, through the student portal.
            </p>

            <p>
            <h3>How do I report a missing grade?</h3>
            If you notice a missing grade, we recommend reaching out to your instructor or relevant administrative staff for clarification and resolution.
            </p>

            <p>
            <h3>Contacting Support</h3>
            If you have specific questions or need assistance related to the Missing Grade Report System, our support team is here to help.
            </p>
            </div>
        </div>
    )
}

export default Help_and_suport ; 