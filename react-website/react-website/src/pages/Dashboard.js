import React from "react";
import Unsplash from "C:\\Users\\chris\\Desktop\\react-website\\react-website\\src\\assets\\charles-deloye-2RouMSg9Rnw-unsplash.jpg";
import "../styles/Contact.css";

function Dashboard () {
  return (
    <div className="dashboard">
      <div
        className="dashboardtop"
        style={{ backgroundImage: `url(${Unsplash})` }}
      ></div>
      <div className="aboutBottom">
        <h1> Your Progress </h1>
        <p>
          
The Grade Reporting web platform stands as a pivotal tool within the educational landscape, seamlessly connecting students, instructors, and administrators to streamline the process of addressing and resolving grade-related issues. This digital hub serves as a centralized repository for reporting and managing discrepancies in academic assessments, ensuring a fair and transparent evaluation system.

One of the primary functions of the Grade Reporting web is to empower students with a user-friendly interface to report any discrepancies or concerns regarding their grades. Through intuitive navigation, students can submit detailed information about specific assignments, exams, or overall course grades that they believe may have been miscalculated or overlooked. This feature not only fosters a sense of accountability but also encourages open communication between students and faculty.

On the instructor's end, the platform offers a robust set of tools to review and address grade-related concerns efficiently. Faculty members can access a comprehensive dashboard that consolidates reported issues, allowing them to investigate and respond promptly. The system facilitates a collaborative dialogue between students and instructors, promoting a transparent and accountable grading process.

Administrators benefit from the Grade Reporting web's analytical capabilities, gaining insights into trends and patterns related to grade discrepancies. This information aids in the identification of systemic issues, enabling educational institutions to implement proactive measures to enhance the accuracy and fairness of their grading systems.

Furthermore, the Grade Reporting web promotes a culture of continuous improvement by offering detailed analytics and reports to educational institutions. These insights help institutions refine their grading processes, implement targeted interventions, and ensure that the academic evaluation system aligns with the principles of fairness and accuracy.

In essence, the Grade Reporting web acts as a catalyst for fostering a collaborative and transparent academic environment. By facilitating effective communication between students, instructors, and administrators, this platform contributes to the ongoing enhancement of educational practices, ensuring that grades reflect true academic achievements while addressing concerns in a timely and equitable manner.
        </p>

        <p> YOUR PROGRESS IS CURRENTLY UNAVAILABLE...</p>

        <p> CGPA = 3.78</p>
      </div>
    </div>
  );
}

export default Dashboard;