import React, { useState } from 'react';
import Navigation from './Navigation';
import Accordion from 'react-bootstrap/Accordion';
import Footer from './footer';

const HelpAndSupportPage = () => {
  const [searchQuery, setSearchQuery] = useState('');


  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    // Logic to filter FAQ based on searchQuery can be implemented here
  };

  return (
    <div className="help-and-support">
         <Navigation/>
         <div className="help-header">
      <h1 className='acc-head'>How can we help?</h1>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Ask a question..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        {/* Additional logic for search functionality can be added here */}
      </div>
      </div>
        <div className="faq">
            <h1 className='acc-head'>FAQ</h1>
      <Accordion className="acc-box" defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header ><h3 className='acc-header'> How can I access my grades on the student grading website?</h3> </Accordion.Header>
        <Accordion.Body>
        To access your grades, log in to the student grading website using your provided credentials (ID number/pin). Once logged in, 
        navigate to the grades or dashboard section, where you'll find your course-specific grades and assessments.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><h3 className='acc-header'>Can I see detailed feedback for my assignments on the website?</h3></Accordion.Header>
        <Accordion.Body>
        Yes, the student grading website usually provides detailed feedback along with grades for assignments, quizzes, or exams.
         You can access this feedback by clicking on the respective assignment or assessment.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header><h3 className='acc-header'>What should I do if I notice an error in my grades?</h3></Accordion.Header>
        <Accordion.Body>
        If you believe there is an error in your grades, the first step is to contact your instructor or the relevant faculty member. 
        They can review and address any discrepancies in grading.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header><h3 className='acc-header'>Can I view past semester grades on the website?</h3></Accordion.Header>
        <Accordion.Body>
        Yes, student grading websites often provide access to past semester grades and course history.
         You can usually access archived information or previous semesters' grades within the platform.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    
    </div>
    <div className="contact-support">
       <div className="tt"><h2 className='acc-head'>Talk to an expert</h2>
      <h3 className='acc-head'> We are hear to help</h3>
       </div> 
      <button className="contact-support-btn">Contact Support</button>

      </div>
      <Footer/>
    </div>
  );
};

export default HelpAndSupportPage;

