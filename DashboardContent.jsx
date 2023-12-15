import React from 'react'
import "./DashboardContent.css"
import dashy from "../assets/diary.webp";

const DashboardContent = () => {
  return (
    <div>
        <div className="mask">
         <img className="hero-image" src={dashy} alt="hero-image" />
        </div>


        <div  className="dash">
        <h3 className='chead'>Previous Courses</h3>
      <p>Course Code</p> 
      <p>Credit Hours</p>
      <p>Grade(GPA)3.1</p>
      <p>Status</p>
      <span className='codep'></span>

      <span className='code1'>DCIT105</span> 
      <span className='code2'>3</span>
      <span className='code3'>B</span>
      <span className='code4'>Completed</span>
      <span className='codep'></span>

      <span className='code1'>DCIT103</span> 
      <span className='code2'>3</span>
      <span className='code3'>C</span>
      <span className='code4'>Completed</span>
      <span className='codep'></span>

      <span className='code1'>DCIT101</span> 
      <span className='code2'>2</span>
      <span className='codex'>X</span>
      <span className='codex'>Completed</span>
      <span className='codep'></span>

      <span className='code1'>DCIT102</span> 
      <span className='code2'>3</span>
      <span className='code3'>D</span>
      <span className='code4'>Completed</span>
      <span className='codep'></span>

      <span className='code1'>DCIT109</span> 
      <span className='code2'>3</span>
      <span className='code3'>A</span>
      <span className='code4'>Completed</span>
      <span className='codep'></span>
      
      <br className='cry'></br>
      <span className='codex'>ALERT!!: You have a missing grade for this course (DCIT201). Please report it by visiting the MISSING GRADE page if you have not reported it already.</span>
      <span className='codep'></span>

      <br></br>
      <br></br>

      <h3 className='chead'>Current Courses</h3>
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
            <h3 className='chew'>Tips For Academic Success</h3>
        <div className='tips-grade'>
            <div className='tips-code'>
                <h3>1. Keep Track of Grades:</h3>
                <p>Regularly monitor your academic progress by checking for any missing grades on your dashboard. If you identify discrepancies, use the Missing Grade Form to address them promptly. </p>
                <br></br>
                <h3>2. Stay Updated:</h3>
                <p>Ensure you stay informed about any course announcements, updates, or modifications to the syllabus. Regularly check your notifications to stay abreast of any important information.</p>
            </div>

            <div className='tips-code'>
                <h3>3.Take Advantage of Office Hours:</h3>
                <p>If you have questions or concerns regarding your grades, make the most of your instructor's office hours. This provides an opportunity for seeking clarification and receiving valuable feedback.</p>
                <br></br>
                <h3>4. Plan Your Study Time:</h3>
                <p>Proactively plan your study schedule, ensuring you allocate sufficient time for assignments and projects. Adhere to deadlines and avoid last-minute rushes to submit high-quality work.</p>
            </div>
        </div>
        <div className='dot'></div>
    </div>
  )
}

export default DashboardContent
