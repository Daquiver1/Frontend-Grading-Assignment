import "./InstructorContactpage.css"
import React from 'react'


const InstructorContactpage = () => {
  return (

    
    <div>
        <br />
        <br />
        
        

       

        
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

        
        </div>
       
    </div>
  )
}

export default InstructorContactpage
