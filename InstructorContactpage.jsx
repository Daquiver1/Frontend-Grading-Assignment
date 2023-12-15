import "./InstructorContactpage.css"
import React from 'react'
import inspector from "../assets/note.webp";
import Assyne from "../assets/instruct 1.jpeg";
import Azziz from "../assets/aziz.jpeg";
import Micheal from "../assets/instruct5.jpeg";

const InstructorContactpage = () => {
  return (
    <div>
        <div className="mask">
         <img className="hero-image" src={inspector} alt="hero-image" />
        </div>

        <h3 className="instructorHeader">Instructor Contact Page</h3>

        <div className="instructorContact">
            <div className="instructorContactInfo">
                <h3>Senior Lecturer</h3>
                <img src={Assyne} alt="contact-image" className="pics"/>
                  <div className="box">
                   <p className="P-2"> COURSE CODE:  DCIT205 </p>
                   <br></br>
                   <p className="P-2"> INSTRUCTOR:  Dr.Assynne</p>
                   <br></br>
                   <p className="P-2"> EMAIL:  assyne@ug.st.gh</p>
                   <br></br>
                   <p className="P-2"> OFFICE HOURS:  8:00 - 3:00pm</p>
                   <br></br>
                   <p className="P-2"> OFFICE Loc.:  CS Dept R22 </p>
                   </div>
            </div>

            <div className="instructorContactInfo">
                <h3>Senior Lecturer</h3>
                <img src={Azziz} alt="contact-image" className="pics"/>
                  <div className="box">
                   <p className="P-2"> COURSE CODE:  DCIT203 </p>
                   <br></br>
                   <p className="P-2"> INSTRUCTOR:  Dr.Aziz</p>
                   <br></br>
                   <p className="P-2"> EMAIL:  aziz@ug.st.gh</p>
                   <br></br>
                   <p className="P-2"> OFFICE HOURS:  8:00 - 3:00pm</p>
                   <br></br>
                   <p className="P-2"> OFFICE Loc.:  CS Dept R41 </p>
                   </div>
            </div>

            <div className="instructorContactInfo">
                <h3>Lecturer</h3>
                <img src={Micheal} alt="contact-image" className="pics"/>
                <div className="box">
                  <p className="P-2"> COURSE CODE:  DCIT201 </p>
                  <br></br>
                   <p className="P-2"> INSTRUCTOR:  Pro.Michael</p>
                   <br></br>
                   <p className="P-2"> EMAIL:  Michael@ug.st.gh</p>
                   <br></br>
                   <p className="P-2"> OFFICE HOURS:  8:00 - 2:00pm</p>
                   <br></br>
                    <p className="P-2"> OFFICE Loc.:  CS Dept R52 </p>
                </div>
            </div>
            
        </div>
        <div className="tip-box">

        <div className="tips">
        <h4>Send a Message</h4>
          <p>Use the form below to send a message to your instructor:</p>
          <div className="forms">
            <label>Subject</label>
            <input type="text" name="subject" placeholder="Type Subject here" />

            <label>Message box</label>
            <textarea name="message" placeholder="Type your message here" rows="4" />
            
            <button type="submit" className="btn-light">Send Message</button>
          </div>
          </div>

        <div className="tips">
          <h4>Guidelines for Successful Communication</h4>
          <h5>1. Clarity and Conciseness:</h5>
          <p>Communicate your thoughts clearly and concisely. Avoid unnecessary details and use straightforward language to convey your message effectively.v</p>
          <h5>2. Include Relevant Details:</h5>
          <p>If you are inquiring about a specific assignment or grade, mention the course name, assignment details, and the date of submission.</p>
          <h5>3.Choose the Right Medium:</h5>
          <p>Select the appropriate communication medium based on the context. Whether it's face-to-face, email, or a phone call, the medium should align with the nature and urgency of the message.</p>
          <h5>4.Verify for any updates.:</h5>
          <p>Prior to reaching out, please ensure to review the announcements and course materials for any updates that could address your inquiries.</p>
        </div>
        </div>
       
    </div>
  )
}

export default InstructorContactpage
