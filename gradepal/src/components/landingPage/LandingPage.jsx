import React from "react";
import imageSrc from './img1.jpeg';
import "./landingpage.css";
function LandingPage() {
  return (
    <>
      <div className="container">
        <h1 className="heading">
          Welcome to the Missing Grade Reporting System
        </h1>
        <img src={imageSrc} alt="System Illustration" className="landing-image" />
        <p className="description">
          This system is designed to help students track and report grades that
          are not recorded in their academic profiles. Use the navigation links
          to explore the features.
        </p>

        <div className="features">
          <div className="feature-card">
            <h2 className="feature-title">View Your Grades</h2>
            <p className="feature-description">
            Access a comprehensive overview of your current grades directly from the home page. 
            Easily navigate through courses, check for alerts on missing grades, 
            and filter results by semester or academic year on the intuitive dashboard. 
            Take control of your academic journey by staying up-to-date with this user-friendly and accessible tool.
            </p>
          </div>

          <div className="feature-card">
            <h2 className="feature-title">Report Missing Grades</h2>
            <p className="feature-description">
              Easily report any missing grades using the intuitive Missing Grade
              Form.
            </p>
            <h3 className="">How it works</h3>
            <p className="feature-description">
              <ol>
                <li> Access the Form: Find the dedicated "Report Missing Grades" section on the home page.</li>
                <li> Fill Out the Form: Complete a simple form providing essential details such as the course name, instructor name, expected grade, and an explanation for the missing grade.</li>
                <li> Submit with Confidence: Click the submit button to initiate the reporting process. Receive a confirmation message indicating the successful submission</li>
                <li> Stay Informed: Keep track of your submitted reports and receive timely alerts on the dashboard to address any unrecorded grades efficiently.</li>
                
              </ol>
            </p>
          </div>

          <div className="feature-card">
            <h2 className="feature-title">Connect with Instructors</h2>
            <p className="feature-description">
              Enhance communication and stay informed by easily connecting with your instructors. 
              Our platform provides a seamless experience for students to reach out to their instructors, 
              making it simple to seek clarification, discuss grades, or get guidance on course materials. 
              Foster a collaborative learning environment by establishing direct contact with instructors, 
              ensuring a smoother academic journey.
            </p>
          </div>
        </div>

        {/* Placeholder for more sections/pages */}
      </div>
    </>
  );
}

export default LandingPage;
