import "./Gradereportc.css"
import React from 'react'
import Schoolimg from "../assets/note.webp";

const Gradereportc = () => {
  return (
    <div>
       <div className="mask">
         <img className="hero-image" src={Schoolimg} alt="hero-image" />
        </div>


        <div  className="dash">
        <h3 className='chead'>First Semester</h3>
      <p>Course Code</p> 
      <p>Credit Hours</p>
      <p>Grade(GPA)3.1</p>
      <p>Status</p>
      <span className='codep'></span>

      <span className='code1'>DCIT205</span> 
      <span className='code2'>3</span>
      <span className='code3'>B</span>
      <span className='code4'>Completed</span>
      <span className='codep'></span>

      <span className='code1'>DCIT203</span> 
      <span className='code2'>3</span>
      <span className='code3'>C</span>
      <span className='code4'>Completed</span>
      <span className='codep'></span>

      <span className='code1'>DCIT201</span> 
      <span className='code2'>2</span>
      <span className='codex'>..</span>
      <span className='codex'>Completed</span>
      <span className='codep'></span>

      <span className='code1'>DCIT207</span> 
      <span className='code2'>3</span>
      <span className='code3'>D</span>
      <span className='code4'>Completed</span>
      <span className='codep'></span>

      <span className='code1'>DCIT209</span> 
      <span className='code2'>3</span>
      <span className='code3'>A</span>
      <span className='code4'>Completed</span>
      <span className='codep'></span>

      
      <span className='codep'></span>

      <h3 className='chead'>Second Semester</h3>
      <p>Course Code</p> 
      <p>Credit Hours</p>
      <p>Grade(GPA)_</p>
      <p>Status</p>
      <span className='codep'></span>

      <span className='code1'>DCIT205</span> 
      <span className='code2'>3</span>
      <span className='code3'> _</span>
      <span className='code4'>In Progress</span>
      <span className='codep'></span>

      <span className='code1'>DCIT203</span> 
      <span className='code2'>3</span>
      <span className='code3'> _</span>
      <span className='code4'>In Progress</span>
      <span className='codep'></span>

      <span className='code1'>DCIT201</span> 
      <span className='code2'>2</span>
      <span className='code3'> _</span>
      <span className='code4'>In Progress</span>
      <span className='codep'></span>

      <span className='code1'>DCIT207</span> 
      <span className='code2'>3</span>
      <span className='code3'> _</span>
      <span className='code4'>In Progress</span>
      <span className='codep'></span>

      <span className='code1'>DCIT209</span> 
      <span className='code2'>3</span>
      <span className='code3'> _</span>
      <span className='code4'>In Progress</span>
      <span className='codep'></span>
     
        </div>
            <h3 className="th">Frequently Asked Questions</h3>
        <div className='tips-grade'>
            <div className='tips-code'>
                <h3>1. Can I request a grade review?</h3>
                <p>If you believe there is an error in your grade, you can request a review. Contact your instructor for the necessary steps. </p>
                <br></br>
                <h3>2. How is GPA calculated?</h3>
                <p>GPA is calculated based on the grades you receive in each course. Each grade is assigned a numerical value, and the GPA is the average of these values.</p>
            </div>
            
            <div className='tips-code'>
                <h3>3. How often are grades updated?</h3>
                <p>Grades are typically updated at the end of each assignment, exam, or grading period. Check your dashboard for real-time updates.</p>
                <br></br>
                <h3>4. Plan Ahead:</h3>
                <p>Plan your study schedule in advance, and make sure to submit assignments and projects on time. Avoid last-minute rushes.</p>
            </div>
        </div>
        <div className='dot'></div>

       
        <div className='dot'></div>
    </div>
  )
}

export default Gradereportc
