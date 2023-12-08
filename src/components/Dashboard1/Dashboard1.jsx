import React from 'react'
import './lala.css'

const Dashboard1 = () => {
  return (
    <div className='mainthing'>
        


    <div  className="dash">
        <h3 className='chead'>Previous Courses</h3>
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
      <span className='codex'>X</span>
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

      <span className='codex'>ALERT!!: You have a missing grade for this course (DCIT201). Please report it by visiting the MISSING GRADE page if you have not reported it already.</span>
      <span className='codep'></span>

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
    <div>
            <h3>Tips for Academic Success</h3>
        <div className='tips-grade'>
            <div className='tips-code'>
                <h3>1. Check for Missing Grades:</h3>
                <p>Regularly check your dashboard for any missing grades. If you notice any discrepancies, use the Missing Grade Form to report them. </p>

                <h3>2. Stay Informed:</h3>
                <p>Stay informed about course announcements, updates, and any changes in the syllabus. Check your notifications regularly.</p>
            </div>

            <div className='tips-code'>
                <h3>3. Utilize Office Hours:</h3>
                <p>If you have questions or concerns about your grades, take advantage of your instructor's office hours. It is an opportunity to get clarification and feedback.</p>

                <h3>4. Plan Ahead:</h3>
                <p>Plan your study schedule in advance, and make sure to submit assignments and projects on time. Avoid last-minute rushes.</p>
            </div>
        </div>
    </div>
        <div className='dot'></div>
    </div>

  )
}

export default Dashboard1