import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle} from '@fortawesome/free-solid-svg-icons';
import './help.css';
import { Link } from 'react-router-dom';

const HelpSupport = () => {
const [isNavActive, setNavActive] = useState(false);
function toggleNav() {
    setNavActive(!isNavActive);
  }
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // logic for form submission here
    console.log('Form submitted:', formData);
  
  };

  return (
    <div>
        <header id="header">
        <div className="top-menu-box">
          <div className="ugLogo">
            <img src="https://www.ug.edu.gh/sites/default/files/ug_standard_new_sl_1.png" alt="UG logo" width="150px" />
          </div>
          <div>
          <div className={`sidenav ${isNavActive ? 'active' : ''}`}>
          <ul className="sideList">
                <li className="navbar-item"><a href="www.sakai ug.edu.gh" className="navbar-link">SAKAI<span></span></a></li>
                <li className="navbar-item"><Link to="/" className="navbar-link">HOMEPAGE<span></span></Link></li>
                <li className="navbar-item"><a href="https://ienabler.ug.edu.gh/pls/prodi41/w99pkg.mi_login" className="navbar-link">MIS<span></span></a></li>
                <li className="navbar-item"><Link to="/gradereport" className="navbar-link">GRADE REPORT<span></span></Link></li>
                <li className="navbar-item"><Link to="/gradeform" className="navbar-link">MISSING GRADE<span></span></Link></li>
                <li className="navbar-item"><Link to="/helpsupport" className="navbar-link">HELP & SUPPORT<span></span></Link></li>
              </ul>
            </div>
            <nav className="navbar">
              <ul>
                <li className="navbar-item"><div className="menu-icon" onClick={toggleNav}>&#9776;</div></li>
                <li className="navbar-item">
                  <FontAwesomeIcon className="avatar" icon={faUserCircle} /> <span className="user-name">Mr. BEN</span>
                  <a href="#" className="navbar-link">LOGOUT<span></span></a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <section id="faq">
        <section id="faq">
  <h2>Frequently Asked Questions</h2>
  <div className="question">
    <h3>What is the Missing Grade Reporting System?</h3>
    <p>
      The Missing Grade Reporting System is designed to assist students in tracking
      and reporting grades that are not recorded in their academic profiles. It provides
      a platform for reporting missing grades and ensuring that all your academic
      achievements are accurately reflected.
    </p>
   
  </div>

  <div className="question">
    <h3>How does the system work?</h3>
    <p>
      To use the system, log in to your account and navigate to the "Missing Grades"
      section. Select the relevant course or assignment, and submit the required details
      regarding the missing grade. Our system will then process your request and ensure
      that the missing grade is properly recorded.
    </p>
  </div>

  <div className="question">
    <h3>When should I use the Missing Grade Reporting System?</h3>
    <p>
      You should use the system when you notice that a grade is missing from your academic
      profile and is not reflecting your actual performance. This could occur due to
      administrative errors, technical glitches, or other unforeseen circumstances.
    </p>
  
  </div>

  <div className="question">
    <h3>Is there a deadline for reporting missing grades?</h3>
    <p>
      While there isn't a strict deadline, we recommend reporting missing grades as soon
      as you identify them. Timely reporting allows us to address the issue promptly and
      ensures that your academic records remain accurate.
    </p>
   
  </div>

  <div className="question">
    <h3>Can I report missing grades for past semesters?</h3>
    <p>
      Yes, you can report missing grades for past semesters. The Missing Grade Reporting
      System allows you to submit requests for any grades that are not accurately reflected
      in your academic history.
    </p>
   
  </div>

  <div className="question">
    <h3>How will I be notified once the missing grade is updated?</h3>
    <p>
      Once your missing grade request is processed and the grade is updated, you will
      receive a notification via email. Ensure that your contact information is up to date
      to receive timely updates on the status of your reported missing grades.
    </p>
    
  </div>
</section>

      </section>

      <section id="contact">
        <h2>Technical Support</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-field">
            <label htmlFor="subject">Subject</label>
            <select
              id="subject"
              required
              value={formData.subject}
              onChange={handleChange}
            >
              <option value="" selected disabled>
                Select a subject
              </option>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Technical Issue">Technical Issue</option>
              <option value="Feedback">Feedback</option>
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="4"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default HelpSupport;