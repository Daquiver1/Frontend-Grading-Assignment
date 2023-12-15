import React from 'react'
import './homef.css'


const Homef = () => {
  return (
    <div className='home-content'>

        <div className='home-content1'>
           <h1>Welcome to Well-Grading site</h1> 

           <div className='home-box'>
           <p className='home-content1-p'>
           Welcome to [Your Grading Website Name]! Your one-stop destination for managing student grades efficiently.
           We are here to help you to get the best grades in your classes.</p>

           <div className='grid'>
            <div className='grid-item'>
              <h3>Efficient Grading Process:</h3>
              <p>Benefit: Save time and effort with an intuitive grade entry system.</p>
              <p>Explanation: Our platform streamlines the grading process, allowing teachers to enter and update grades quickly and easily. Spend less time on administrative 
                tasks and more time on teaching.</p>

            </div>

            <div className='grid-item'>
              <h3>Instant Access to Student Performance Data:</h3>
              <p>Benefit: Get real-time insights into student progress.</p>
                <p>Explanation: With our system, grades are updated instantly, 
                providing teachers, students, and parents with immediate access 
                to performance data. This helps in addressing concerns 
                promptly and celebrating achievements as they happen.</p>
            </div>
           </div>
           </div>
            </div>

      
    </div>
  )
}

export default Homef
