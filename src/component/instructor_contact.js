import React from 'react';

export default function instructor_contact() {
  return (
   <> 
   <section className="contacts">
    <h2>Instuctors Contact Page/</h2>
  </section>


  <section className="contact">
    <div className="getin">
      <h2>Names Of Instructors</h2>
      <p>
      DR. Boateng Grant
      <br/>
      DR. Clement Boateng
      <br/>
      DR. Minta Isaac
        </p>

      <div className="getin-details">
        <h3>Location</h3>
        
        <div>
          
          <p>University Of Ghana, Legon.</p>
        </div>
        <h3>Intructors phone line</h3>
        
        <div>
          <p>(+233) 559 157 391 / (+233) 239 400 171
          <br/>
          (+233) 245 684 372 / (+233) 269 741 724
          <br/>
          (+233) 556 587 333 / (+233) 203 684 469
          </p>
          
        </div>
        <h3>Insructors Email Address</h3>
        
        <div>
          <p>boatenggrant33@gmail.com
          <br/>
          clementboateng1@gmail.com
          <br/>
          mintaisaac87@gmail.com
          </p>
          
        </div>
        <h3>Support</h3>
        
        <div>
          <p>dcs@ug.edu.gh</p>
        </div>
      </div>
    </div>
    <div className="form">
      <h4>Do You Need Our Help?</h4>
      <p>Send Us Email</p>
      <div className="form-row">
        <input type="text" placeholder="Your Name"/>
        <input type="text" placeholder="Enter Instructor Email"/>
      </div>
      <div className="form-col">
       <input type="text" placeholder="Sudent ID"/>
      </div>
      <div className="form-col">
        <textarea name="" id="" cols="30" rows="8" placeholder="How can we help you?"></textarea>
       </div>
       <div className="form-col">
        <button>Submit</button>
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