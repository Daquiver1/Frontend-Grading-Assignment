import React from 'react';

export default function dashboard() {
  return (
   <>
   <section className='section7'>
      <div className="Dashboard">
        <h1>Welcome To The Student Dashboard</h1>

        <div className="stats">
          <div className="stat">
            <h2>Missing Grades</h2>
            <p>2</p>
          </div>

          <div className="stat2">
            <h2>Courses</h2>
            <p>24</p>
          </div>
          
          <div className="stat3">
            <h2>The Highest GPA</h2>
            <p>3.7</p>
          </div>
        </div>

        <div>
        <div className="stat4">
            <h2>90 Student Has:</h2>
            <p>A</p>
          </div>

        </div>
        <div>
        <div className="stat5">
            <h2>120 Students Has:</h2>
            <p>B+</p>
          </div>

        </div>
        <div>
        <div className="stat6">
            <h2>180 Students Has:</h2>
            <p>B</p>
          </div>

        </div>
        <div>
        <div className="stat7">
            <h2>240 Students Has:</h2>
            <p>C+</p>
          </div>

        </div>
           <div>
           <div className="stat8">
            <h2>300 Students Has:</h2>
            <p>C</p>
           </div>
           
          

        </div>
        <div>
      

        </div>
        

        <div className="alert">
          <h3>Attention</h3>
          <p>There are 2 missing grades for your fall of the semester. Please make sure to submit these grades to avoid any issues.</p>
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
    <div className="subscribe">
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