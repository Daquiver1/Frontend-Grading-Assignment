import React from 'react'
import './Instructor2.css'

const Instructor1 = () => {
  return (
  
    <div className="mainDiv">
      <div className="lecturerInfo">
        <h2>Lecturer.</h2>
        <p><strong>Name:</strong> Mr. Michael Agbo Tettey Soli</p>
        <p><strong>Email:</strong>  matsoli@gmail.com</p>
      </div>
      <div className="courseList">
        <h2>Course Codes:</h2>
        <ul>
          <li>DCIT 205</li>
          <br/>
          <li>DCIT 104</li>
        </ul>
      </div>
      <div className="lecturerInfo">
        <h2>Lecturer.</h2>
        <p><strong>Name:</strong> Mr. Mark Attah Mensah</p>
        <p><strong>Email:</strong>  mamensah@ug.edu.gh</p>
      </div>
      <div className="courseList">
        <h2>Course Codes:</h2>
        <ul>
          <li>DCIT 103</li>
          <br/>
          <li>DCIT 208</li>
        </ul>
      </div>
    </div>  
    
      
  )
}

export default Instructor1
