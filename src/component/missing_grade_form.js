export default function() {
  return (
  <>
  <section id="R-FORM1">
    <div className="R-FORM2">
      <header>Missing Grade Form</header>
      <form action="#" class="form">
        <div className="input-box-f">
        <label>Full Name</label>
        <input type="tex" placeholder="Enter full name" required/>
       </div>

       <div className="input-box-f">
        <label>Student Email Adress</label>
        <input type="tex" placeholder="Enter Email Adress" required/>
       </div>

       <div className="column">
          <div className="input-box-f">
            <label>Phone Number</label>
            <input type="tex" placeholder="Phone Number" required/>
          </div>
       </div>

        <div className="column">
          <div className="input-box-f">
            <label>Student ID</label>
            <input type="tex" placeholder="Enter Your Student ID" required/>
          </div>
       </div>

       <div className="gender-box">
        <h3>Gender</h3>
        <div className="gender-option">
          <div className="gender">
            <input type="radio" id="check-male" name="gender" checked/>
            <label for="check-male">Male</label>
          </div>
          <div className="gender">
            <input type="radio" id="check-female" name="gender" checked/>
            <label for="check-female">Female</label>
          </div>
          <div className="gender">
            <input type="radio" id="check-other" name="gender" checked/>
            <label for="check-other">prefer not to say</label>
          </div>
        </div>
       </div>

       <div className="input-box-f addres">
        <label>Explanation</label>
        <textarea name="" id="" cols="30" rows="8" placeholder="Enter your explanation"></textarea>
                 <div className="column">
          <div className="select-box">
            <select>
              <option hindden>Choose Course Name</option>
              <option>Academic Writing II</option>
              <option>Programming I</option>
              <option>Digital and Logic Systems Design</option>
              <option>Multi Media and Web Design</option>
              <option>Computer Architecture & Organization</option>
              <option>E-Business Architecture</option>
            </select>
          </div>
          <input type="text" placeholder="Enter Your Instructor Name" required/>
         </div>

         <div className="column">
          <input type="text" placeholder="Enter Your Expected Grade" required/>
        
        </div>

          
       </div>
       <button>Submit</button>
      </form>
     </div>

  </section>

  <div className='paragraph'>
      <h1>Note About Missing Grade</h1>
      </div>

      <div className='paragraph2'>
      <h1>Purpose and Use</h1>
      <p>The missing grade form serves as a formal means for students to communicate discrepancies in their academic records.
It is utilized when students identify missing grades due to administrative errors, overlooked submissions, or any other situations where their academic performance has not been properly recorded.</p>
    </div>
    <div className='paragraph2'>
      <h1>Submission Process</h1>
      <p>Students are usually required to complete the missing grade form provided by their educational institution.
The form typically includes details such as the student's name, identification number, course information, the assignment or exam in question, and a brief explanation of why the grade is believed to be missing.</p>
    </div>
    <div className='paragraph2'>
      <h1>Timeline</h1>
      <p>There is often a specific timeline for submitting a missing grade form, and it's important for students to adhere to these deadlines to ensure timely resolution.</p>
    </div>
    <div className='paragraph2'>
      <h1>Resolution and Follow-Up</h1>
      <p>Once submitted, the form is reviewed by the relevant academic authorities or administrative staff.
        The institution will investigate the matter and take appropriate actions to rectify the missing grade if the claim is validated.
        Students may receive updates on the progress of their request, and the final resolution is communicated through official channels.</p>
    </div>
    <div className='paragraph2'>
      <h1>Importance of Accuracy</h1>
      <p>Maintaining accurate academic records is crucial for both students and educational institutions.
          The missing grade form process contributes to the integrity of academic assessments and ensures that students' achievements are accurately reflected.</p>
    </div>
    <div className='paragraph2'>
      <h1>Communication Channels</h1>
      <p>Students are often encouraged to communicate with instructors or academic advisors alongside submitting the missing grade form to address any concerns and facilitate a smoother resolution process.</p>
    </div>

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