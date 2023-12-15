import React from 'react';
import './FAQ.css';
import MainHeader from './MainHeader';
import Footer from './Footer';

const FAQ = () => {
 return (
    <div>
        <MainHeader />

        <div className="help-and-support">
      <h1>Help and Support</h1>
      <p>Need assistance? We're here to help.</p>
      <h2>Contact Us</h2>
      <p>Email: support@example.com</p>
      <p>Phone: (123) 456-7890</p>
      
      <h2>Help Documentation</h2>
      <p>Click <a href="https://www.example.com/help">here</a> to access our full help documentation.</p>
    </div>

        <table>
            <thead>
                <tr>Q: What is GradeHub?</tr>
            </thead>
            <tbody>
                <tr>A: GradeHub is an online platform designed to streamline and automate the grading process for educators. It offers tools for creating and managing assessments, grading assignments efficiently, and providing timely feedback to students.</tr>
            </tbody>
            <thead>
                <tr>Q: How does GradeHub help educators save time?</tr>
            </thead>
            <tbody>
                <tr>A: GradeHub automates the grading workflow by allowing educators to create and administer assessments online. The platform automatically grades objective questions, reducing the time spent on manual grading. It also provides analytics to help educators identify areas where students may need additional support.</tr>
            </tbody>
            <thead>
                <tr>Q: Can GradeHub integrate with other learning management systems?</tr>
            </thead>
            <tbody>
                <tr>A: Yes, GradeHub is designed to integrate seamlessly with various learning management systems (LMS). This integration ensures that grades and assessment data can be easily synchronized between GradeHub and the educator's preferred LMS.</tr>
            </tbody>
            <thead>
                <tr>Q: Is GradeHub secure for handling student data?</tr>
            </thead>
            <tbody>
                <tr>A: Yes, GradeHub prioritizes the security and privacy of student data. The platform employs robust encryption protocols, secure authentication methods, and follows best practices to ensure the confidentiality and integrity of all user information.</tr>
            </tbody>
            <thead>
                <tr>What is the purpose of the Missing Grade Form Page in GradeHub?
                </tr>
            </thead>
            <tbody>
                <tr>The Missing Grade Form Page allows students to report any missing grades they may have encountered. It includes fields for the course name, instructor name, expected grade, and an explanation, providing a structured way to address missing grade concerns.
                </tr>
            </tbody>
            <thead>
                <tr>What features are available on the Instructor Contact Page in GradeHub?</tr>
            </thead>
            <tbody>
                <tr>The Instructor Contact Page lists all instructors along with their contact details. Additionally, it offers an option to send a simulated email to the instructor, providing students with a convenient way to communicate and seek clarification.</tr>
            </tbody>
            <thead>
                <tr>Can you elaborate on the fields included in the Missing Grade Form Page?</tr>
            </thead>
            <tbody>
                <tr>The form includes fields such as course name, instructor name, expected grade, and an explanation field. These details help in accurately reporting and resolving missing grade issues efficiently.</tr>
            </tbody>
            <thead>
                <tr>How does the Submit button on the Missing Grade Form Page work?</tr>
            </thead>
            <tbody>
                <tr>The Submit button allows students to officially report a missing grade. Once the necessary information is provided in the form, clicking Submit initiates the process of addressing and resolving the reported issue.</tr>
            </tbody>
        </table>


        <Footer />
    </div>
 );
};

export default FAQ;