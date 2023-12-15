
import { Link } from 'react-router-dom';
import './Landingpage.css';

import Header  from "./Header";


const LandingPage = () => {
  return (
   
    <div className="landing-page">
        <Header/>
      <div>
      <header>
    
        <h1>Welcome to the Missing Grade Reporting System</h1>
      </header>

      <section className="overview">
        <div className="overview-grid">
          <div className="overviewBox">
            <h2>Explore the System</h2>
            <p>
            Our platform empowers students to take control of their educational journey by
                        providing a seamless solution to track and report grades that may not be recorded in their
                        official academic profiles.
            </p>
            <p>
            With our user-friendly interface, managing your grades becomes a breeze. Easily view your
                        current grades, receive alerts for any missing grades, and gain valuable insights into your
                        academic progress.
            </p>
            <p>
            Reporting a missing grade is simple and efficient. Our system allows you to submit the
                        necessary details, including the course name, instructor information, expected grade, and an
                        explanation. Stay informed and proactive about your academic achievements with the Missing
                        Grade Reporting System.
            </p>
          </div>
        </div>
      </section>

      <section className="get-started-section">
        {/* Use the Link component to create a link to the login page */}
        <Link to="/login" className="get-started-button">
          Login To Get Started
        </Link>
      </section>

      
    </div>
    </div>
  );
};

export default LandingPage;
