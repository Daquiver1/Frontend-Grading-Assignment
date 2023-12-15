import React from 'react';

export default function() {
  return ( <>
  <section className='section6'>
       <div className="GradeReport">
        <h1>Grade Report</h1>
        <div className="filters">
          <select name='Select Academic Semesters'>
            <option value='second semester'>First Semester</option>
            <option value='first semester'>Second Semester</option>
          </select>
        </div>
        <div className="grade-report-table">
          <table>
            <thead>
              <tr>
                <th>Subject</th>
                <th>Credits</th>
                <th>Grades</th>
                <th>GPT</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>CRitical Thinking and <br/> Practical Reasonning </td>
                <td>3</td>
                <td>A</td>
                <td>12</td>
              </tr>
              <tr>
                <td>Office Porductivity<br/>Tools</td>
                <td>3</td>
                <td>B</td>
                <td>9</td>
              </tr>
              <tr>
                <td>Vectors<br/>and Geometry </td>
                <td>3</td>
                <td>B+</td>
                <td>10</td>
              </tr>
              <tr>
                <td>Programming I</td>
                <td>3</td>
                <td>B+</td>
                <td>10</td>
              </tr>
              <tr>
                <td>AcademicWriting II</td>
                <td>3</td>
                <td>C+</td>
                <td>7.5</td>
              </tr>
              <tr>
                <td>E-Business Architecture</td>
                <td>3</td>
                <td>A</td>
                <td>12</td>
              </tr>
              <tr>
                <td>Algebra<br/>and Trigonometry </td>
                <td>3</td>
                <td>B</td>
                <td>9</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="average-grade">
        <table>
            <thead>
              <tr>
                <th>Subject</th>
                <th>Credits</th>
                <th>Average Grades</th>
                <th>GPT</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mathematics for <br/>IT Professional </td>
                <td>3</td>
                <td>C</td>
                <td>6</td>
              </tr>
              <tr>
                <td>Introduction to Statistic<br/>and Probability I</td>
                <td>3</td>
                <td>D</td>
                <td>3</td>
              </tr>
              <tr>
                <td>Introduction to <br/>Computer Science </td>
                <td>3</td>
                <td>D+</td>
                <td>4.5</td>
              </tr>
              <tr>
                <td>Multi Media and<br/>Web Design</td>
                <td>3</td>
                <td>C</td>
                <td>6</td>
              </tr>
              <tr>
                <td>Digital and Logic<br/>System Design</td>
                <td>3</td>
                <td>C</td>
                <td>6</td>
              </tr>
            </tbody>
          </table>
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
      <a href="#" className="yellow">SUBSCRIBE</a>
    </div>

    <div className="copyright">
      <p>copyright @2023 all rights reserved | University of Ghana.</p>
    </div>
     </div>
   </footer>
       
   </>
   )
}
