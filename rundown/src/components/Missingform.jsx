import "./Missingform.css";
import React from 'react';
import Programming from "../assets/programmingbg.jpg";

const Missingform = () => {
  return (
    <div className="form">
       
          <div className="mask">
         <img className="hero-image" src={Programming} alt="hero-image" />
        </div>
        <h4 className="report-header">Report Missing Grade Form</h4>
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
