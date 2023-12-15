import "./Missingform.css";
import React from 'react';


const Missingform = () => {
  return (
    <div className="form">
    <div className="span-div">
   <span className="idea">Student Missing Grade's log</span><br/>
   <span className="info">Student's with dificulties in accessig their grade's should kindly fill this form and expect responds withing 72 ours.THANK YOU!!!</span><br/><br/>
   

    </div>
       
          <div className="mask">
         
        </div>
        
        <form className="formz">
       
           <label>Course Name</label>
           <input type="text" name="course" placeholder="Enter Course Name" className="form-input" required/>

           <label>Instructor Name</label>
           <input type="text" name="instructor" placeholder="Enter Instructor Name" className="form-input" required/>

           <label>Expected Grade</label>
           <input type="text" name="grade" placeholder="Enter Expected Grade" className="form-input" required/>

           <label>Explanation field</label>
           <textarea rows="6" placeholder="Type your message here" className="textarea1" required/>

           <button className="btn-light">Submit</button>
          
        </form>
        
        
      
    </div>
  )
}

export default Missingform
