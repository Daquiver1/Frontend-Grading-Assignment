import React from 'react'
import './MissingGrade.css'

const MissingGrade = () => {
  return (
    <div className="form">


        <h2 className="report-header">Report Missing Grade Form</h2>
        <form className="input">

           <label>Course Name or Code</label>
           <input type="text" name="course" placeholder="Enter Course Name or Code" className="form-input" required/>

           <label>Instructor Name</label>
           <input type="text" name="instructor" placeholder="Enter Instructor Name" className="form-input" required/>

           <label>Expected Grade</label>
           <input type="text" name="grade" placeholder="What was your Expected Grade?" className="form-input" required/>

           <label>Reason</label>
           <textarea rows="6" placeholder="Type your message here" className="textarea" required/>

           <button className="submit-btn">Submit</button>

        </form>

    </div>
  )
}

export default MissingGrade;