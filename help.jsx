import React from "react";
import "./help-styles.css";
import Header from "./ms-header";
import Footer from "./ms-footer";

function Help(){
  return(
    <div>
      <Header />
      <section>
      <h1 className="support-h">FAQ's & SUPPORT CENTRE</h1>
      <ul className="accordion">
        <li>
          <input className="inputs" type="radio" name="accordion" id="first" checked></input>
          <label className="acc-label" for="first">ABOUT GRADE</label>
          <div className="main-content">
            <h1>How Are Grades Determined?</h1>
            <p>Grades are typically determined based on various assessments, including exams, quizzes, assignments, participation, and other factors specified in the course syllabus. The grading criteria are established by the instructor.</p>
            <h1>What Happens If I Fail a Course?</h1>
            <p>Failing a course means you did not meet the minimum requirements for passing. It may impact your GPA and academic standing. Consult your school's policies on retaking failed courses or academic probation.</p>
            <h1>How Do I Appeal a Grade?</h1>
            <p>Many institutions have a formal process for grade appeals. If you believe there is an error in grading or have valid reasons for reconsideration, follow the established procedures outlined by your institution.</p>
          </div>
        </li>
        <li>
          <input className="inputs" type="radio" name="accordion" id="second"></input>
          <label className="acc-label" for="second">GRADE REPORT</label>
          <div className="main-content">
          <h1>What is a Grade Report?</h1>
          <p>A Grade Report is a document that provides a summary of a student's academic performance in a specific course or semester. It typically includes grades for individual assignments, exams, and an overall course grade.</p>
          <h1>How Can I Access My Grade Report?</h1>
          <p>Grade reports are often accessible through online student portals or learning management systems provided by educational institutions. Check with your school's administration or instructor for specific instructions on accessing your grade report.</p>
          <h1>What Should I Do If I Encounter Technical Issues Accessing My Grade Report Online?</h1>
          <p>If you experience technical difficulties accessing your grade report online, contact your school's IT support or the relevant administrative office for assistance. They can provide guidance on resolving any technical issues.</p>
          </div>
        </li>
        <li>
          <input className="inputs" type="radio" name="accordion" id="third"></input>
          <label className="acc-label" for="third">MISSING GRADE</label>
          <div className="main-content">
            <h1>What Should I Do If I Haven't Received a Grade for an Assignment or Exam?</h1>
            <p>If you haven't received a grade for a specific assignment or exam, consider reaching out to your instructor to inquire about the status and expected timeframe for grade release.</p>
            <h1>What If I Disagree with the Grade I Eventually Receive?</h1>
            <p>If you disagree with the grade you receive, follow the established procedures for grade appeals at your institution. This may involve discussing your concerns with the instructor or submitting a formal appeal, depending on the school's policies.</p>
            <h1>What Steps Can I Take to Prevent Issues with Missing Grades in the Future?</h1>
            <p>Stay informed about your course syllabus, communicate regularly with your instructors, and be proactive in seeking feedback. Familiarize yourself with your institution's policies on grade reporting and appeals.</p>
          </div>
        </li>
      </ul>
      <div className="more-info">
        <div className="more-info1">
          <h3>You Can Still Contact Us or Send Us an e-mail For Further Enquiries</h3>
          <div className="tele">
            <p>telephone: 0555735524</p>
            <p>e-mail: BGANTI@ST.UG.EDU.GH</p>
          </div>
        </div>
        <div className="more-info2">
          <h3>You can also follow us on our social media handles</h3>
          <div className="handles">
            <p>twitter:</p>
            <p>facebook:</p>
            <p>instagram:</p>
            <p>tik tok:</p>
          </div> 
        </div>
      </div>
    </section>
    <Footer />
    </div>
  );
}


export default Help;