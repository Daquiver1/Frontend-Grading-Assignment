
import React from 'react';


function LandingPage(){
  return(
    <div className = "landing-page">
      
      <h1>Welcome To Grade Map</h1>
      <p>
        Our platform makes it much easier to assess grades,report issues with grades, and keep
        student information safe.Lecturers can easily be contacted in case of missing or incorrect grades recorded
      </p>

      <div className = "features">
        <h2>Features and Services</h2>
        <ul>
          <li>GPA Calculation</li>
          <li>Grade Analysis</li>
          <li>Contact Lecturer</li>
          <li>Grade Report</li>
          <li>Missing Grades Alert</li>
        </ul>
      </div>

      <div className = "pros">
        <h2>Benefits of Our Platform</h2>
        <p>Our platform makes it so much easier to analyse grades and determine one's overall performance
          and progress made. It has also made it more hassle-free for students to report missing and incorrect grades
          to the right authorities. Lecturers can also easily attend to students who have issues, much easier with our platform.
        </p>
        </div>

        <div className = "pros">
              <h2>Testimonials</h2>
              <p>
                "This app is the best thing I've used throughout my education. I used to chase lecturers around in case
                of errors with my grade and sometimes nothing is done about it.Now I can just open up my phone and 
                get my problem rectified without the extra hassle"
                <br/> ~Sandra, Student.
              </p>

              <p>
                "This app has made grading and rectifying grades much easier"
                <br/> ~ Michael Mensah, Lecturer.
              </p>
        </div>

        <div className = "pros">
          <h2>Subscriptions</h2>
          <p>You can use the app for free! Or check out our premium plans starting at only $0.99/month</p>
        </div>
        <div className = "pros">
          <h2>Contact Us</h2>
          <p>
            Have any questions, complaints or suggestions? Contact our support team at supportgm@gmail.com
          </p>
        </div>
     </div>
  );
}

export default LandingPage;