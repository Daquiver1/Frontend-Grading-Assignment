import React, { useState, useEffect } from 'react';
import './helpSupport.css'

import UserInfo from '../User-Info/userInfo'; 
import HelpSupportNavBar from './supportNavBar.jsx';
import Footer from '../Footer/footer';

const HelpSupport = () => {
  const [grades, setGrades] = useState([]); 
  const [userData, setUserData] = useState({
    studentName: 'Bismark Obuobi',
    programOffering: 'BSc Information Technology',
    level: '200',
    studentId: '11146250',
    missingGradesCount: 3,
  });
  const [showMoreContactHelp, setShowMoreContactHelp] = useState(false);
  const [showMoreCourseHelp, setShowMoreCourseHelp] = useState(false);
  const [showMoreGradesHelp, setShowMoreGradesHelp] = useState(false);

  const handleSeeMoreContactHelp = (event) => {
    event.preventDefault();
    setShowMoreContactHelp(!showMoreContactHelp);
  };

  const handleSeeMoreCourseHelp = (event) => {
    event.preventDefault();
    setShowMoreCourseHelp(!showMoreCourseHelp);
  };

  const handleSeeMoreGradesHelp = (event) => {
    event.preventDefault();
    setShowMoreGradesHelp(!showMoreGradesHelp);
  };

  useEffect(() => {
    document.title = 'Help & Support';
  }, []);

  return (
    <div>
      <HelpSupportNavBar />
      <UserInfo
        studentName={userData.studentName}
        programOffering={userData.programOffering}
        studentId={userData.studentId}
        level={userData.level}
        missingGradesCount={userData.missingGradesCount}
      />

      <section id='support-section'>
        <div className='help-div'>
          <h1>Find Help And Support</h1>
          <div className="search-container">
            <input type="text" placeholder="Search..." />
            <span className="search-icon" role="img" aria-label="Search">&#128269;</span>
          </div>
        </div>
        <div className='help-links'>
          <h1><u>Suggested Help Links</u></h1>
        </div>
        <div className='quicklinks-div'>
          <div>
            <h3>Missing Grades</h3>
            <p>How to spot a missing grade</p>
            <p>How to report missing grades</p>
            <p>Generals rules on how to report</p>
            {showMoreGradesHelp && (
              <div>
                <p>Find lecturer's office</p>
                <p>Not sure exam was submitted?</p>
              </div>
            )}
            <p><a href="#" onClick={handleSeeMoreGradesHelp}>See more</a></p>
          </div>
          <div>
            <h3>Contact Issues</h3>
            <p>Problems on contacting instrustor</p>
            <p>Find instructor's contact details</p>
            <p>Not getting responds from instrustor after reporting</p>
            
            {showMoreContactHelp && (
              <div>
                <p>Alternatives</p>
                <p>Schedule meeting with lecturer</p>
              </div>
            )}
            <p><a href="#" onClick={handleSeeMoreContactHelp}>See more</a></p>
          </div>
          
          <div>
            <h3>Issues with Courses</h3>
            <p>Missing course</p>
            <p>Problems with registered courses</p>
            {showMoreCourseHelp && (
              <div>
                <p>Missed course exam?</p>
                <p>Resit Exam?</p>
              </div>
            )}
            <p><a href="#" onClick={handleSeeMoreCourseHelp}>See more</a></p>
          </div>
        </div>

        <div className='faqs-div'>
        <h1>Frequently Asked Questions</h1>
        <p>How long does my reported missing grades status change?</p>
        <p>Does my report get to the lecturer/instructor directly?</p>
        <p>What do I need to do after report a missing grade?</p>
        </div>

      </section>

      <Footer />
    </div>
  )
}

export default HelpSupport