import React from 'react';
import "./Navbar";



export default function home() {
  return (
    <>
    <section className='section4'>
      <div className='hero'>
        <img alt='heroimg' src='https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=822&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
        <div className='hero-text'>
        <h1>WELCOME TO THE GRADE SYSTEM WEB PAGE</h1>
        <p>Check Your Grade</p>
        <button>
          Start
        </button>
        </div>
        
      </div>
    </section>

    <div className='paragraph'>
      <h1>How does it work?</h1>
      <p>A grade system is a method of evaluating and communicating a student's performance and understanding of academic material. It typically involves assigning symbolic representations, such as letter grades or numerical scores, to reflect the quality of the student's work. Grades serve as a quantitative measure of a student's achievements in courses and are often accompanied by qualitative feedback from instructors.

The grading scale may vary across educational institutions, but it generally includes distinctions such as A, B, C, D, and F (or their numerical equivalents). These grades are commonly associated with specific performance levels, such as excellence, proficiency, satisfactory performance, marginal success, and failure.

The grade system plays a crucial role in assessing students' progress, providing feedback for improvement, and aiding in academic and career decisions. It serves as a standardized way to evaluate and compare students' academic achievements, helping institutions, employers, and students themselves understand their level of competence in various subjects.

Despite its widespread use, the grade system has been subject to ongoing discussions about its effectiveness and potential limitations in fully capturing a student's abilities and potential. Alternative assessment methods, such as project-based evaluations and competency-based assessments, are also explored to provide a more comprehensive understanding of a student's skills and knowledge.</p>
    </div>

    <footer>
  <div class="footer-col">
    <h3>Academic</h3>
    <li>Undergraduate Course</li>
    <li>Student Compliant Form</li>
    <li>Placements For Level 200 Student</li>
    <li>Level 200 & 300 Timetable</li>
    <li>Academic Calender</li>
    <li>Graduate Courses (MSc Computer Science)</li>
    <li>Graduate Courses (MPhil Computer Science)</li>
  </div>

  <div class="footer-col">
    <h3>Admissions</h3>
    <li>Undergraduate</li>
    <li>Graduate</li>
    <li>International Students</li>
    <li>Entry Requirements</li>
    <li>Contact Us</li>
  </div>

  <div class="footer-col">
    <h3>Research</h3>
    <li>Research at DCS</li>
    <li>Research Impact</li>
    <li>Libraries</li>
   
  </div>

  <div class="footer-col">
    <h3>About the Department</h3>
    <li>Introducing DCS</li>
    <li>Head of Department's office</li>
    <li>Faculty</li>
    <li>Events</li>
  </div>

  <div class="footer-col">
    <h3>Newsletter</h3>
    <p>Keep up with our latest news.</p>
    <div class="subscribe">
    <input type='text' placeholder='Your Email Adress'/> 
      <a href="#" class="yellow">SUBSCRIBE</a>
    </div>

    <div class="copyright">
      <p>copyright @2023 all rights reserved | University of Ghana.</p>
    </div>
     </div>
   </footer>

    </>
   )
}