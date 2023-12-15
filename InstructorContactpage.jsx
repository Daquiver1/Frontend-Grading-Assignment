import "./InstructorContactpage.css"
import React from 'react'


const InstructorContactpage = () => {
  return (

    
    <div>
        <br />
        <br />
        
        

        <span className="nice">please input your instructor's name and gmail above and submit before you go on with your message at the last part here.visit your instructor for further information THANK YOU!!!
        </span>

        
        <div className="tip-box">

        <div className="tips">

        <form className="formz">
       
       
     
      
    </form>

        <h4></h4>
          <p>write your instructor here after putting the name and gmail above:</p>
          <div className="forms">
            <label>topic</label>
            <input type="text" name="subject" placeholder="Type Subject here" />

            <label> message will be sent instantly to the gmail you placed above</label>
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
