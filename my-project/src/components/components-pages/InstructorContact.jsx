import React from "react";
import "../components-css/Navbar.css"


function InstructorContact() {
   return(
   
      <div id="contact">
           <h3>Contact the Lecturers here if the need arises</h3>
            <div className="contact-input">
               
               <input placeholder="Name" type="text" />
               <input placeholder="Email" type="email" />
            </div>
      </div>


   )
}
export default InstructorContact;