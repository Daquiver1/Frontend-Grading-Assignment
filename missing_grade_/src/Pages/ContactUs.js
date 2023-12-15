

import React, { useState } from "react";
import Navbar from "./component/Navbar";
import "./ContactUs.css";
import Footer from "./component/footer";

function Contact() {
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleSendEmail = (instructorEmail) => {
    
    const emailData = {
      to: instructorEmail,
      subject: "Regarding the course",
      body: "Dear Professor, I have a question about the course...",
    };

    console.log("Simulating sending email:", emailData);
    setIsEmailSent(true);
  };

  return (
    <div className="dashboard">
      <Navbar />
      <div className="tab-2 contact-tab">
        <h1>Find below a contact list for all the course instructors for the courses you have taken</h1>
        <table>
          <thead>
            <tr>
              <th className="courses">Course</th>
              <th className="exams-score">Instructor</th>
              <th className="grades">Contact</th>
              <th className="actions">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="courses">Critical Thinking and Practical Reasoning</td>
              <td className="exams-score">Dr. Nancy Miles</td>
              <td className="grades">nmiles@gmail.com</td>
              <td className="actions">
                <button
                  className="send-email"
                  onClick={() => handleSendEmail("nmiles@gmail.com")}
                  disabled={isEmailSent}
                >
                  {isEmailSent ? "Email Sent" : "Send Email"}
                </button>
              </td>
            </tr>
            <tr>
              <td className="courses">Academic Writing</td>
              <td className="exams-score">Prof. Seth Nii Moi Allotey</td>
              <td className="grades">snmallotey@ug.edu.gh</td>
              <td className="actions">
                <button
                  className="send-email"
                  onClick={() => handleSendEmail("snmallotey@ug.edu.gh")}
                  disabled={isEmailSent}
                >
                  {isEmailSent ? "Email Sent" : "Send Email"}
                </button>
              </td>
            </tr>
            <tr>
              <td className="courses">Programming I</td>
              <td className="exams-score">Mr. Paul Nii Tackie Armah</td>
              <td className="grades">pntarmah@ug.edu.gh</td>
              <td className="actions">
                <button
                  className="send-email"
                  onClick={() => handleSendEmail("pntarmah@ug.edu.gh")}
                  disabled={isEmailSent}
                >
                  {isEmailSent ? "Email Sent" : "Send Email"}
                </button>
              </td>
            </tr>
            <tr>
              <td className="courses">Statistics</td>
              <td className="exams-score">Dr. Richard Mensah</td>
              <td className="grades">rmensah@ug.edu.gh</td>
              <td className="actions">
                <button
                  className="send-email"
                  onClick={() => handleSendEmail("rmensah@ug.edu.gh")}
                  disabled={isEmailSent}
                >
                  {isEmailSent ? "Email Sent" : "Send Email"}
                </button>
              </td>
            </tr>
            <tr>
              <td className="courses">Calculus 1</td>
              <td className="exams-score">Dr.Ralph Twum</td>
              <td className="grades">rtwum.edu.gh</td>
              <td className="actions">
                <button
                  className="send-email"
                  onClick={() => handleSendEmail("rtwum@ug.edu.gh")}
                  disabled={isEmailSent}
                >
                  {isEmailSent ? "Email Sent" : "Send Email"}
                </button>
              </td>
            </tr>
            <tr>
              <td className="courses">Calculus 2</td>
              <td className="exams-score">Dr. Ralph Twum</td>
              <td className="grades">rtwum@ug.edu.gh</td>
              <td className="actions">
                <button
                  className="send-email"
                  onClick={() => handleSendEmail("rtwum@ug.edu.gh")}
                  disabled={isEmailSent}
                >
                  {isEmailSent ? "Email Sent" : "Send Email"}
                </button>
              </td>
            </tr>
            
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
