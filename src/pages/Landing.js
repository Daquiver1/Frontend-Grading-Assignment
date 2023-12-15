import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';
import OfficeImage from '../Office.jpg';
import { useAuth } from './AuthContextProvider'; // Import the useAuth hook



function Landing() {
  const { isLoggedIn } = useAuth(); // Access the login state

  const handleButtonClick = () => {
    if (isLoggedIn) {
      // User is logged in, perform the desired action
      alert("Exploring Now!");
    } else {
      // User is not logged in, show login alert
      alert("Please log in first!");
    }
  };

  return (
    <div>
      <section className="hero">
        <div className="overlay1">
          <div className="content">
            <h1>Welcome to the <br />Grade Tracker <br /> Portal</h1>
            <p>The Grade Tracker Portal is a dedicated system designed to <br /> empower students in managing and tracking their academic <br /> progress effectively. Helps in accessing, reporting, and <br /> communicating about your grades.</p>
            <img src={OfficeImage} alt="Office" className="office-image" />
            <div className="button1-container">
              <Link to="/login" className="button1">Login</Link>
            </div>
          </div>
        </div>
      </section>

      {/* New Section for Additional Content */}
      <section className="additional-section">
        <div className="section-container">
          <p className="subtitle">Unified dashboard</p>
          <h2>All your academic details at one place</h2>

          <div className="two-column">
            <div className="col-left">
              <p>
                Every information you'll need from <b>your grades</b> to <b>contacting lecturers</b> that will empower your academic journey. DaTech Academic dashboard powers all students from all walks of life
              </p>
            </div>
            <div className="col-right">
              <p>
                Universities &amp; Institutions &amp; Individuals use <b>DaTech Educational Portal</b> to view their current grades and report missing ones. Definitely the <b>best</b>.
              </p>
            </div>
          </div>
          <div className="button-container">
            <button className="primary-button with-icon" onClick={handleButtonClick}>
              Explore now
              <img src="assets/arrow-right-light.svg" alt="" />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section>
        <br></br><h1 className='Testtitle'>Testimonial</h1><br></br><br></br>
        <div className="testimonial">
          <span className="open quote">“</span>
          <div className="image">
            <div className="clip"></div>
            <img src="https://placehold.co/100" alt=''/>
          </div>
          <p>"DaTech Grade Tracker has simplified my academic life. With a user-friendly interface and real-time alerts, it keeps me on top of my grades. A must-have for any student focused on success!"</p>
          <div className="source">
            <span>Racheal Chuuks</span>
          </div>
          <span className="close quote">”</span>
        </div>
      </section>
      <br></br><br></br><br></br><br></br><br></br><br></br>
    </div>
  );
}

export default Landing;
