import "./InstructorContactpage.css"
import React from 'react'
import inspector from "../assets/instructor.jpg";
import inscontact from "../assets/inscontact.jpg";

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
                <img src={inscontact} alt="contact-image" className="pics"/>
                  <div className="box">
                   <p className="P-2"> Course Code: DCIT205 </p>
                   <p className="P-2"> Instructor: Dr.Assynne</p>
                   <p className="P-2"> Email: assyne@ug.st.gh</p>
                   <p className="P-2"> Office Hours: 8:00 - 3:00pm</p>
                    <p className="P-2"> Office Loc.:CS Dept R22 </p>
                    </div>
            </div>

            <div className="instructorContactInfo">
                <h3>Professor</h3>
                <img src={inscontact} alt="contact-image" className="pics"/>
                <div className="box">
                  <p className="P-2"> Course Code: DCIT201 </p>
                   <p className="P-2"> Instructor: Pro.Michael</p>
                   <p className="P-2"> Email: Michael@ug.st.gh</p>
                   <p className="P-2"> Office Hours: 8:00 - 2:00pm</p>
                    <p className="P-2"> Office Loc.:CS Dept R52 </p>
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
            <textarea name="message" placeholder="Type your message here" />
            <button type="submit" className="btn-light">Send Message</button>
          </div>
          </div>

        <div className="tips">
          <h4>Tips For Effective Communication</h4>
          <h5>1. Be Clear And Concise:</h5>
          <p>Clearly state the purpose of your message and provide any necessary context.</p>
          <h5>2. Include Relevant Details:</h5>
          <p>If you are inquiring about a specific assignment or grade, mention the course name, assignment details, and the date of submission.</p>
          <h5>3. Use Professional Language:</h5>
          <p>Keep your communication professional and respectful.</p>
          <h5>4. Check for Updates:</h5>
          <p>Before reaching out, make sure to check the announcements 
            and course materials for any updates that might address your 
            concerns.</p>
        </div>
        </div>
       
    </div>
  )
}

export default InstructorContactpage
