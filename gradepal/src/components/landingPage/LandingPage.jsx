import React from "react";
import imageSrc from "./img1.jpeg";
import "./landingpage.css";
function LandingPage() {
  return (
    <>
      <div className="container">
        <h1 className="heading">
          Welcome GradePal
        </h1>
        <img
          src={imageSrc}
          alt="System Illustration"
          className="landing-image"
        />
        <p className="description">
          "Unlock the power to reclaim missing grades! Explore our intuitive
          navigation to track and report grades absent from your academic
          profile."
        </p>

        <div className="features">
          <div className="feature-card">
            <h2 className="feature-title">View Your Grades</h2>
            <p className="feature-description">
              Access a comprehensive overview of your current grades directly
              from the home page. <br/>Easily navigate through courses, check for
              alerts on missing grades, and filter results by semester or
              academic year on the intuitive dashboard. <br/>Take control of your
              academic journey by staying up-to-date with this user-friendly and
              accessible tool.
            </p>
          </div>

          <div className="feature-card">
            <h2 className="feature-title">Report Missing Grades</h2>
            <p className="feature-description">
              Report all your missing grades GradePal's intuitive Missing Grade
              Form.
            </p>
            <h3 className="">How it works</h3>
            <p className="feature-description">
              <ol>
                <li>
                  {" "}
                  Access the Form: Find the dedicated "Report Missing Grades"
                  section on the home page.
                </li>
                <li>
                  {" "}
                  Fill Out the Form: Complete a simple form providing essential
                  details such as the course name, instructor name, expected
                  grade, and an explanation for the missing grade.
                </li>
                <li>
                  {" "}
                  Submit with Confidence: Click the submit button to initiate
                  the reporting process. Receive a confirmation message
                  indicating the successful submission
                </li>
                <li>
                  {" "}
                  Stay Informed: Keep track of your submitted reports and
                  receive timely alerts on the dashboard to address any
                  unrecorded grades efficiently.
                </li>
              </ol>
            </p>
          </div>

          <div className="feature-card">
            <h2 className="feature-title">Connect with Instructors</h2>
            <p className="feature-description">
            Seamlessly connect and stay informed by reaching out to your instructors effortlessly. Our platform simplifies communication, enabling students to seek clarification, discuss grades, or gain guidance on course materials. Foster collaboration and a smoother academic journey by establishing direct contact with instructors, enhancing your learning experience.
            </p>
          </div>
        </div>

        {/* Placeholder for more sections/pages */}
      </div>
    </>
  );
}

export default LandingPage;
