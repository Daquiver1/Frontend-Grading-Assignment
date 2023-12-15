// DashboardPage.js
import React from "react";
import { Link } from "react-router-dom";

const DashboardPage = () => {
  // Placeholder data for grades and alerts
  const gradesData = [
    { subject: "Multi Media and Web Design", sem: "L200 Second Semester", grade: "A" },
    { subject: "Computer Architecture & Organisation", sem: "L200 Second Semester", grade: "B" },
    { subject: "E-Business Architectures",sem: "L200 Second Semester", },
    { subject: "Programming I",  sem: "L200 Second Semester", grade: "B" },
    { subject: "Academic Writing II", sem: "L200 Second Semester", },
  ];
  const currentGPA = 3.8;
  const studentID = "11140508";
  const studentEmail = "absulemana003@st.ug.edu.gh";
  const totalCourses = 5;
  const alertsData = [
    {
      type: "Missing Grades",
      message: "You have missing grade in Academic Writing II.",
      color: "danger",
    },
    {
      type: "Missing Grades",
      message: "You have missing grade in E-Business Architectures.",
      color: "danger",
    },
    {
      type: "Results",
      message: "End of sem results release, check sakai",
      color: "info",
    },
  ];

  return (
    
    <div class="container-fluid">
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="display-1">Dashboard</h1>
 
      </div>

      <div className="container">
        <div className="row">
          {/* GPA Card */}
          <div className="col-sm-4 mb-4">
            <div className="card bg-success text-white">
              <div className="card-body">
                <h5 className="card-title">Current GPA</h5>
                <p className="card-text">{currentGPA.toFixed(2)}</p>
              </div>
            </div>
          </div>

          {/* Student ID Card */}
          <div className="col-sm-4 mb-4">
            <div className="card bg-info text-white">
              <div className="card-body">
                <h5 className="card-title">Student Info</h5>
                <p class="card-text">
                  ID {studentID} Mail : {studentEmail}
                </p>
              </div>
            </div>
          </div>

          {/* Total Courses Card */}
          <div className="col-sm-4 mb-4">
            <div className="card bg-warning text-dark">
              <div className="card-body">
                <h5 className="card-title">Total Courses</h5>
                <p className="card-text">{totalCourses}</p>
              </div>
            </div>
          </div>
          {/* Grades Card */}
          <div className="col-sm-6 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Grades Overview</h5>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Subject</th>
                      <th scope="col">Grade</th>
                      <th scope="col">Semester</th>
                    </tr>
                  </thead>
                  <tbody>
                    {gradesData.map((data, index) => (
                      <tr key={index}>
                        <td>{data.subject}</td>
                        <td>{data.grade}</td>
                        <td>{data.sem}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Alerts Card */}
          <div className="col-sm-6 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Alerts</h5>

                <ul className="list-group">
                  <li className="list-group-item">
                    {alertsData.map((data, index) => (
                      <div
                        key={index}
                        className={`alert alert-${data.color}`}
                        role="alert"
                      >
                        <strong>{data.type}:</strong> {data.message}
                      </div>
                    ))}
                  </li>
                </ul>
                <Link to="/missing-grade-form">
                <a
                  class="btn btn-primary mt-3" 
                  role="button"
                >
                  Report Missing Grades
                </a>
                </Link>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
