import React from "react"
import './Home.css'

const Home = () => {
  return (
    <>
      <section className='hero'>
        
          <div className="home-container">
            <section className="hero-section">
              <h1 className="MH">Welcome to the Missing Grade System</h1>
              <p className="MP">This student grade report system page serves as a crucial tool in education, providing comprehensive information about a student's academic performance and other important details of every single student details that may be neede to clarify issues of student grade reports.</p>
            </section>
            <div className="search-bar">
            
            </div>
            <div className='main-mainbus'>
              <h2>Introduction</h2>
              <p>A student missing grade system serves as an essential tool within educational institutions, facilitating the tracking, management, and resolution of missing grades for individual students. It functions as a crucial component of academic administration, ensuring accuracy and completeness in students' academic records.</p>
            </div>
            <div className='submainbus'>
              <h3>Purpose</h3>
              <p>The primary purpose of implementing a student missing grade system is to efficiently monitor and address instances where grades for coursework, exams, or assessments are not recorded or are incomplete. By systematically identifying and rectifying missing grades, this system aids in maintaining accurate academic records, ensuring fairness, and supporting students' academic progress.</p>
            </div>
            <div className='submainbus'>
              <h3>Functionality</h3>
              <p>Data Collection and Recording:The system collects and records grades, providing a centralized database where instructors can input grades for various courses, assignments, or examinations.<br/>Missing Grade Identification:It identifies gaps or discrepancies in the recorded grades against the expected assessments or coursework, flagging instances where a student’s grade is missing or incomplete. <br/>Notification and Communication:The system can notify both students and instructors about missing grades, prompting action to rectify the issue. Automated alerts or notifications can be sent via email or through the system itself.<br/>Tracking and Reporting:Administrators or faculty members can track the status of missing grades, generate reports for specific courses or students, and monitor progress in resolving missing grade issues.</p>
            </div>
            <div className='submainbus'>
              <h3>Benefits</h3>
              <p>Improved Record Keeping:Maintains comprehensive and accurate records of students’ academic performance, supporting fair evaluation and grading.<br/>Timely Resolution:Promotes timely resolution of missing grades, preventing undue delays in students’ progress or graduation.<br/>Enhanced Communication:Facilitates effective communication between instructors, students, and administrative staff regarding missing grades, fostering a proactive approach to resolution.</p>
            </div>
            <div className='submainbus'>
              <h3>Importance</h3>
              <p>Academic Integrity:Ensures accuracy in academic records, upholding the integrity of the educational institution’s grading system.<br/>Student Progress Monitoring:Enables educators and administrators to accurately track student progress, identifying areas where additional support or intervention might be necessary.<br/>Regulatory Compliance: Meets regulatory requirements for accurate and complete academic records, especially crucial for accreditation purposes.</p>
            </div>
          </div>
      </section>
    </>
  )
}
export default Home
