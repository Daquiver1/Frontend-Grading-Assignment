import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <header>
        <nav>
        <ul className="navbar">
      <li><Link to="Homepage">Homepage</Link></li>
      <li><Link to="/LoginForm">Login</Link></li>
      <li><Link to="/Dashboard">Dashboard</Link></li>
      <li><Link to="/GradeReport">Grade Report</Link></li>
      <li><Link to="/MissingGradeForm">Missing Grade Form</Link></li>
      <li><Link to="/InstructorContactPage">Instructor Contact</Link></li>
      <li><Link to="/HelpSupportPage">Help and Support</Link></li>
    </ul>
        </nav>
      </header>

      <main>
        <section className="sidebar">
          <b>CHECK YOUR GRADES! </b> <br />
          WITH OUR MISSING GRADE REPORTING SYSTEM YOUR GRADES WILL ALWAYS REMAIN INTACT!
        </section>

        <section className="content">
          <h1>Missing Grade Reporting System</h1>
          <p>Welcome to our Missing Grade Reporting System!<br />
            Our platform is designed to support students in tracking and reporting any missing grades that might not appear in their academic profiles.<br />
            Our primary goal is to provide an interactive and user-friendly interface that empowers students to effortlessly access their grades,<br />
            report missing ones, and communicate effectively with their instructors or academic administration.<br /><br />
            <b>HERE ARE SOME FEATURES:</b><br /><br />
            <b>Grade Tracking: </b>Gain easy access to your grades. View a comprehensive overview of your academic performance in one convenient location.<br />
            <b>Missing Grade Reporting:</b> Report any missing grades directly through our system. Streamline the process of ensuring that all your academic accomplishments are accurately recorded.<br />
            <b>User-Friendly Interface:</b> Navigate through the platform effortlessly. Our intuitive design makes it simple for students to interact with their academic information.<br />
            <b>Communication Bridge:</b> Connect with instructors or academic administrators. Our system facilitates efficient communication channels, allowing you to address any concerns regarding missing grades promptly.<br /><br />
            At our Missing Grade Reporting System, we are dedicated to enhancing your academic journey by providing a tool that empowers you to take charge of your academic record. Join us and stay on top of your grades effortlessly!
          </p>
  
        </section>
      </main>

      <footer>
        <p>&copy; 2023 Missing Grade Reporting System</p>
      </footer>
    </div>
  );
}

export default HomePage;
