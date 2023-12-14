import React from 'react';
import './Hero.css';



const AppHero = () => {
  return (
    <div>
      <div className="hero-section">
        <div className="hero-content">
          <h1>GRADETRACK</h1>
          <p>Empowering students to report missing grades and ensure academic transparency</p>
          <a href="/login" className="cta-button">Get Started</a>
        </div>
      </div>
      <div className="about-section">
        <div className="about-content">
          <h2>About Us</h2>
          <p>GRADETRACK is a platform designed to empower students to report missing grades and ensure academic transparency. Our mission is to provide a seamless experience for students to communicate with instructors and stay informed about their academic progress.</p>
        </div>
      </div>
      <div className="features-section">
        <h2>Features</h2>
        <div className="feature">
          <h3>Report Missing Grades</h3>
          <p>Empower students to report missing grades and ensure academic transparency.</p>
        </div>
        <div className="feature">
          <h3>Student Dashboard</h3>
          <p>Students can view their current grades and receive alerts for missing grades.</p>
        </div>
        <div className="feature">
          <h3>Communication</h3>
          <p>Facilitate communication between students and instructors regarding missing grades.</p>
        </div>
      </div>
      <div className="testimonials-section">
        <h2>Student Testimonials</h2>
        <div className="testimonial">
          <p>"GRADETRACK helped me keep track of my missing grades and communicate with my instructors easily. It's a game-changer!"</p>
          <h4> Andrew Oko Bakah</h4>
        </div>
        <div className="testimonial">
          <p>"Reporting missing grades has never been easier. I feel more empowered and in control of my academic progress."</p>
          <h4>Otiwaah Marian</h4>
        </div>
      </div>
    </div>
  );
};

export default AppHero;
