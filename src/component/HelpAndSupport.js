import React from 'react';


export default function() {
  return (
    <>
    <section className='section5'>
    <div className="container">
      <h1 className="header">Help and Support</h1>
      <div className="faq">
        <div className="question">Q: How are grades calculated in a typical educational setting?</div>
        <div className="answer">A: Grades are often calculated based on a combination of factors, including assignments, exams, quizzes, participation, and sometimes attendance. Each component may contribute a certain percentage to the overall grade.</div>
      </div>
      <div className="faq">
        <div className="question">Q: What do letter grades (e.g., A, B, C) signify?</div>
        <div className="answer">A: Letter grades are symbolic representations of a student's performance. In many systems, "A" represents excellent performance, "B" is for good performance, "C" indicates satisfactory work, and so on.</div>
      </div>
      <div className="faq">
        <div className="question">Q: How can I calculate my GPA (Grade Point Average)?</div>
        <div className="answer">A: GPA is often calculated by assigning point values to each letter grade (e.g., A = 4.0, B = 3.0, etc.) and then taking the average. Each course's grade is multiplied by its credit hours, and the total is divided by the total credit hours.</div>
      </div>
      <div className="faq">
        <div className="question">Question 2</div>
        <div className="answer">Answer 2</div>
      </div>
      <div className="faq">
        <div className="question">Q: What is the significance of a pass/fail grading system?</div>
        <div className="answer">A: In a pass/fail system, students receive either a "Pass" or "Fail" instead of traditional letter grades. This system is sometimes used to reduce stress and focus on mastery of content rather than competition.</div>
      </div>
      <div className="faq">
        <div className="question">Q: How often are grades typically updated?</div>
        <div className="answer">A: Grades are usually updated by instructors within a specific timeframe after an assessment or assignment is completed. The frequency can vary, but instructors often aim to provide timely feedback.</div>
      </div>
      <div className="faq">
        <div className="question">Q: What should I do if I disagree with a grade I received?</div>
        <div className="answer">A: If you believe there is an error in your grade, the first step is to communicate with the instructor. Provide a clear explanation of your concern and any supporting evidence. If the issue persists, you may need to follow the formal appeals process established by the educational institution.</div>
      </div>
      <div className="faq">
        <div className="question">Q: Are there alternative grading methods besides traditional letter grades?</div>
        <div className="answer">A: Yes, alternative grading methods include pass/fail, competency-based grading, and narrative evaluations. These approaches focus on a more comprehensive understanding of a student's abilities.</div>
      </div>
      <div className="faq">
        <div className="question">Q: How do cumulative grades affect my academic standing?</div>
        <div className="answer">A: Cumulative grades, often reflected in GPA, play a significant role in determining academic standing. They can affect eligibility for honors, scholarships, and certain programs. Maintaining a good GPA is essential for academic success.</div>
      </div>
      <div className="faq">
        <div className="question">Q: What resources are available for students who are struggling with their grades?</div>
        <div className="answer">A: Students facing challenges with their grades can seek support from tutors, academic advisors, or counseling services. Many educational institutions offer resources to help students improve their study habits and succeed academically.</div>
      </div>
      <form className="contact-form">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <input type="submit" value="Submit" />
      </form>
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