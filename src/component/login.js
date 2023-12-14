import React from 'react';


export default function() {
  return (
    <>
    <section className='section1'>
   <div className='container'>
     <div className='header'>
      <div className='text'>Student Grade Login form</div>
       <div className='underline'></div>
     </div>
     <div className='inputs'>
       <div className='input'>
        <input type='Student ID' placeholder='Student ID'/>
       </div>
       <div className='input'>
        <input type='Pin/Password' placeholder='Pin/Password'/>
       </div>
       <div className='input'>
        <input type='Student Email' placeholder='Student Email ID'/>
       </div>
       </div>
         <div className='forget-password'>Lost Password? <span>Click Here!</span></div>
        <div className='submit-container'>
       <div className='submit'>Login</div>
       <div className='submit'>Submit</div>
       </div>
   </div>

   
   </section>

   <footer>
  <div className="footer-col">
    <h3>Academic</h3>
    <li>Undergraduate Course</li>
    <li>Student Compliant Form</li>
    <li>Placements For Level 200 Student</li>
    <li>Level 200 & 300 Timetable</li>
    <li>Academic Calender</li>
    <li>Graduate Courses (MSc Computer Science)</li>
    <li>Graduate Courses (MPhil Computer Science)</li>
  </div>

  <div className="footer-col">
    <h3>Admissions</h3>
    <li>Undergraduate</li>
    <li>Graduate</li>
    <li>International Students</li>
    <li>Entry Requirements</li>
    <li>Contact Us</li>
  </div>

  <div className="footer-col">
    <h3>Research</h3>
    <li>Research at DCS</li>
    <li>Research Impact</li>
    <li>Libraries</li>
   
  </div>

  <div className="footer-col">
    <h3>About the Department</h3>
    <li>Introducing DCS</li>
    <li>Head of Department's office</li>
    <li>Faculty</li>
    <li>Events</li>
  </div>

  <div className="footer-col">
    <h3>Newsletter</h3>
    <p>Keep up with our latest news.</p>
    <div class="subscribe">
    <input type='text' placeholder='Your Email Adress'/> 
      <a href="#" class="yellow">SUBSCRIBE</a>
    </div>

    <div className="copyright">
      <p>copyright @2023 all rights reserved | University of Ghana.</p>
    </div>
     </div>
   </footer>

   

   

   



   </>
   
   )

}