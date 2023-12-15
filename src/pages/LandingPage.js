import React from 'react';
import Home from "../components/Home"
import Footer from '../components/Footer'
import legonlogo from "../assets/legonlogo.jpeg"

import { faCode } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

import "../App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LandingPage = () => {
  return (
    <>
   <div>
    <Home />
   </div>
    <section className="look">
      <div className="text">
      <h1>ENHANCING ACADEMIC TRANSPARENCY.</h1>
      <span>Missing Grade Report System.</span>
      <p>The Missing Grade Report System stands as a testament to the commitment of educational institutions to academic integrity and student satisfaction. By leveraging technology to address missing grade concerns, institutions can create a more transparent and accountable learning environment, ultimately enriching the educational experience for all stakeholders. The implementation of an MGRS is a progressive step toward fostering a culture of transparency and excellence in academia.</p>
      <NavLink to="/login" className="edu">Login</NavLink>
    </div>
    </section>
    <section className="process">
    <h2>Abstract</h2>
    <p>In contemporary educational institutions, maintaining transparency and accountability in grading processes is paramount. A Missing Grade Report System (MGRS) emerges as a solution to address the challenges associated with missing grades, offering a streamlined mechanism for both students and educators. This short thesis explores the significance, functionalities, and potential impact of implementing an MGRS within educational institutions.</p>
      <h2>Introduction</h2>
    <p>Academic institutions play a pivotal role in shaping the future of students. However, the conventional grading systems are not immune to challenges, and missing grades often emerge as a concern. The Missing Grade Report System aims to enhance the transparency of grading processes, empower students, and streamline communication between students and instructors.</p>   
      <h2>Importance of Academic Transparency</h2>
    <p>Transparency in academic assessments fosters trust among stakeholders, creating an environment where students feel confident about the accuracy and fairness of their grades. The MGRS addresses the need for transparency by providing a centralized platform to track, report, and resolve missing grades promptly.</p>
     <div className="row">
      <div className="course-col">
      <h3>Centralized Reporting</h3>
      <p>Students can submit reports for missing grades through a user-friendly interface, detailing the course, instructor, and any relevant information.</p>
      </div>
      <div className="course-col">
        <h3>Automated Notifications</h3>
        <p>The system automates notifications to instructors, alerting them to pending missing grade reports and prompting timely resolution.
        </p>
      </div>
        <div className="course-col">
          <h3>Resolution Workflow</h3>
          <p>A systematic workflow ensures that missing grades are promptly investigated and resolved, maintaining accountability in the grading process.</p>
             </div>
     </div>
     <div className="row">
    <div className="course-col">
      <h3>Centralized Reporting</h3>
      <p>Students can submit reports for missing grades through a user-friendly interface, detailing the course, instructor, and any relevant information.</p>
    </div>
      <div className="course-col">
        <h3>Automated Notifications</h3>
        <p>The system automates notifications to instructors, alerting them to pending missing grade reports and prompting timely resolution.
        </p>
      </div>
        <div className="course-col">
          <h3>Resolution Workflow</h3>
          <p>A systematic workflow ensures that missing grades are promptly investigated and resolved, maintaining accountability in the grading process.</p>
         </div>
   </div>
  </section>
  <div className="align">
  <NavLink to="/help" className="help-container">
    <p className="bold-text">GOT ANY QUESTIONS? NEED HELP?</p>
  </NavLink>
   <br />
   <br />
    <p className="last-text">We are here to help. Get in touch!</p>
  <span><FontAwesomeIcon icon={faCode} /></span>
  <br />
  <br />
  </div>
   <div>
   <Footer />
   </div>
  </>
  );
};

export default LandingPage;