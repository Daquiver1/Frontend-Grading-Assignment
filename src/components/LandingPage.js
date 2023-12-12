import React from 'react';
import { Link } from 'react-router-dom';
import yourImage from './images/img (1).jpg'; 
import styles from './LandingPage.module.css';


const LandingPage = () => {
  return (
    <div>
      <header>
        <h1>Welcome to the Missing Grade Reporting System</h1>
      </header>
      <nav>
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/grade-report">Grade Report</Link></li>
          <li><Link to="/missing-grade-form">Report Missing Grade</Link></li>
          <li><Link to="/instructor-contact">Instructor Contact</Link></li>
          <li><Link to="/help-support">Help & Support</Link></li>
        </ul>
      </nav>

      <img src={yourImage} alt="Your Image" className={styles.yourImage} />

      <h2>About the Missing Grade Reporting System</h2>
      <section className={styles.aboutSection}>
  
  <p>
    Welcome to the Missing Grade Reporting System, a cutting-edge platform designed to empower students and streamline the process of reporting missing grades. At our core, we believe in transparency, efficiency, and fostering a collaborative environment between students and instructors.
  </p>
  <p>
    Our system allows students to submit missing grade reports seamlessly, providing instructors with the necessary information to address and resolve grade discrepancies promptly. Through this platform, we aim to enhance communication and accountability in the academic setting.
  </p>
  <p>
    Features of our system include real-time status updates on submitted reports, a user-friendly dashboard for easy navigation, and a secure login system to protect your information. We are committed to continuously improving our platform to meet the evolving needs of both students and educators.
  </p>
  <p>
    If you have any questions, feedback, or encounter issues while using our system, please don't hesitate to reach out to our dedicated support team. Your success is our priority, and we are here to ensure a smooth academic experience for you.
  </p>
</section>

      <footer>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Phone: +233 (0) 305-789-540</p>
          <p>Email: ugcomp@ug.com</p>
          <p>Address: Legon, Accra, 0233</p>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
        </div>

        <div className="footer-copyright">
          <p>&copy; 2023 Missing Grade Reporting System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
