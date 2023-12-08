import React, { useEffect } from 'react';
import "./faqs.css"

export default function HelpAndSupport() {
  useEffect(() => {
    const handleClick = (event) => {
      event.currentTarget.classList.toggle('active');
    };

    const accordionElements = document.querySelectorAll('.contentBx');
    accordionElements.forEach((element) => {
      element.addEventListener('click', handleClick);
    });

    return () => {
      accordionElements.forEach((element) => {
        element.removeEventListener('click', handleClick);
      });
    };
  }, []);
  return (
    <div className="help-support-container">
      <h1 className="page-title">Help and Support</h1>
      <section className="accordion">
        <div className="contentBx">
          <div className="label">What is Grade Reporting?</div>
          <div className="content">
            <p>Grade reporting is the process of documenting and communicating a student's academic performance in a specific course or subject. It typically involves assigning grades or marks to assessments such as exams, assignments, and projects.</p>
          </div>
        </div>
        <div className="contentBx">
          <div className="label">How are Grades Determined?</div>
          <div className="content">
            <p>Grades are usually determined based on various factors, including performance on assignments, quizzes, exams, class participation, and other criteria set by the instructor. Each educational institution may have its grading system and criteria.</p>
          </div>
        </div>
        <div className="contentBx">
          <div className="label">Can I Request a Grade Review?</div>
          <div className="content">
            <p>Students may request a grade review or appeal under specific circumstances by following the procedures outlined by the educational institution. This process usually involves submitting a formal request and providing evidence to support the review.</p>
          </div>
        </div>
        <div className="contentBx">
          <div className="label">How to Improve Grades?</div>
          <div className="content">
            <p>Improving grades often involves dedicating more time to studying, seeking help from instructors or tutors, actively participating in class, and adopting effective study habits. Setting goals and managing time efficiently can also contribute to better academic performance.</p>
          </div>
        </div>
        <div className="contentBx">
          <div className="label">Understanding Grading Scales</div>
          <div className="content">
            <p>Grading scales may vary across different educational institutions. Understanding the grading scale used by your institution helps interpret the significance of grades, such as A, B, C, etc., and their corresponding grade point values.</p>
          </div>
        </div>
        <div className="contentBx">
          <div className="label">When Are Grades Released?</div>
          <div className="content">
            <p>The release dates for grades can differ depending on the institution and the academic calendar. Grades are usually made available after the completion of the assessment period or semester.</p>
          </div>
        </div>
        <div className="contentBx">
          <div className="label">Grade Calculation Methods</div>
          <div className="content">
            <p>Educational institutions may employ various methods for calculating grades, including weighted averages, point systems, or specific evaluation criteria for different assignments. These methods determine the final grades for courses.</p>
          </div>
        </div>
        <div className="contentBx">
          <div className="label">Dealing with Incomplete Grades</div>
          <div className="content">
            <p>Students may receive incomplete grades (e.g., "I" or "Incomplete") under specific circumstances, and they usually have a designated period to fulfill the requirements to change the incomplete grade to a final grade.</p>
          </div>
        </div>
        <div className="contentBx">
          <div className="label">Impact of Grades on Academic Standing</div>
          <div className="content">
            <p>Grades can have implications on a student's academic standing, such as eligibility for scholarships, academic honors, progression to advanced courses, or meeting graduation requirements.</p>
          </div>
        </div>

      </section>

      

      <section className="contact-form-section">
        <h2>Contact Technical Support</h2>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input type="text" id="fullName" name="fullName" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>

          <button type="submit" className="submit-button">Submit</button>
        </form>
      </section>
    </div>
  );
}