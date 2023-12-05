// DashboardPage.js
import React from "react";

const DashboardPage = () => {
  // Placeholder data for grades and alerts
  const gradesData = [
    { subject: "Math", grade: "A" },
    { subject: "English", grade: "B" },
    { subject: "Science",   },
    // Add more subjects and grades as needed
  ];
  const currentGPA = 3.8;
  const studentID = "11140508";
  const studentEmail = "absulemana003@st.ug.edu.gh";
  const totalCourses = 5;
  const alertsData = [
    { type: "Missing Grades", message: "You have missing grades in Science." , color: "danger"},
    { type: "Results", message: "End of sem results release, check sakai",  color: "info"},
  ];

  return (
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
              <p class="card-text">ID {studentID} Mail : {studentEmail}</p>

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
                  </tr>
                </thead>
                <tbody>
                  {gradesData.map((data, index) => (
                    <tr key={index}>
                      <td>{data.subject}</td>
                      <td>{data.grade}</td>
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
            <div key={index} className={`alert alert-${data.color}`} role="alert">
            <strong>{data.type}:</strong> {data.message}
            </div>
          ))}
        </li>
      </ul>
      <a class="btn btn-primary mt-3" href="/grade-report" role="button">Report Missing Grades</a>
 
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default DashboardPage;
