import React from 'react'
import './Missinggrade.css'


const Missinggrade = () => {
  return (
    <div className="div-owner">

<div className="span-div">
   <span className="idea">Student Missing Grade's log</span><br/> <br/>
   <span className="mainspan" ><span className="topthere">Student Id:</span>11303690</span> <br/>
   <span className="mainspan" ><span className="topthere">Name:</span> Desmond Adarkwa</span>

    </div>
       
        
        
        <form className="my-form">
       <h3 className="talkup">Report Your Missing Grade by Filling In The Space Available<br/>IF NOT!! you can follow the instructions below and visit your MIS WEB</h3>
           <label>Course Name</label>
           <input type="text" name="course" placeholder="Enter Course Name" className="form-input" required/>

           <label>Instructor Name</label>
           <input type="text" name="instructor" placeholder="Enter Instructor Name" className="form-input" required/>

           <label>Expected Grade</label>
           <input type="text" name="grade" placeholder="Enter Expected Grade" className="form-input" required/>

           <label>Explanation field</label>
           <textarea rows="6" placeholder="Type your message here" className="textarea1" required/>

           <button className="btn"> Submit</button>
          
        </form>

      
<div>
<span className="info"> !!!KINDLY Follow These Steps Incase The Login Does Not Work Due To Technical Problem </span>
<ol className="list-below1">
<li className="list-below">Log in to MIS WEB</li>
<li className="list-below">Select Student/Academic Enquiries</li>
<li className="list-below">Select Gradebook and Incomplete/Missing Assignments-Student or
Incomplete and Missing Assignments- Class</li>
<li className="list-below">Print</li>
<li className="list-below">Select Include Zeros. The report will not print if that is unselected.</li>
<li className="list-below">Select Term and Arrow over students</li>
<li className="list-below">Print. Report should pull up. </li>
</ol>
<span className="note">NOTE!! You are to use this option when you cant contact your lecturer</span>
</div>

    </div>
  )
}

export default Missinggrade
