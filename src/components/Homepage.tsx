import "./component.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { Component } from "react";

function HomePage() {
  return (
    <>
      <div className="items_container">
        <div className="items">
          <img
            className="logo"
            src="images/logo.jpeg"
            alt="Logo of University of Ghana."
          />
        </div>
        <div className="items">
          <img
            className="profile"
            src="images/profile.jpg"
            alt="profile picture"
          />
        </div>
      </div>
      <br />
      <Router>
        <div className="nav_grid">
          <div className="nav">
            {" "}
            <Link to="/DashboardPage">Dashboard</Link>
          </div>
          <div className="nav">
            <Link to="/GradeReport">Grade Report</Link>
          </div>
          <div className="nav">
            <Link to="/MissingGradeForm">Missing Grade Form</Link>Missing Grade
            Form
          </div>
          <div className="nav">
            <Link to="/ContactInstructor">Contact Instructor</Link>Contact
            Instructor
          </div>
          <div className="nav">
            <Link to="/HelpAndSupport">Help and Support</Link>Help and Support
          </div>

          <Routes>
            <Route exact path="/DashboardPage" element={<Dashboard />}></Route>
            <Route exact path="/GradeReport" element={<GradeReport />}></Route>
            <Route
              exact
              path="/MissingGradeForm"
              element={<MissingGradeForm />}
            ></Route>
            <Route
              exact
              path="/ContactInstructor"
              element={<ContactInstructor />}
            ></Route>
            <Route
              exact
              path="/HelpAndSUpport"
              element={<HelpAndSUpport />}
            ></Route>
          </Routes>
        </div>
      </Router>
      <br />

      <h1 style={{ color: "orange", textAlign: "center" }}>
        Welcome to the Missing Grade Report System
      </h1>
      <p>
        Welcome to our Missing Grade Report System! We understand that keeping
        track of grades is crucial for students and educators alike. Our system
        is designed to provide a seamless and efficient process for reporting
        and resolving missing grades.
      </p>
      <p>
        This system allows students, parents, or teachers to report missing
        grades for courses.
      </p>
      <p>
        Once a missing grade report is submitted, our dedicated team takes
        immediate action. They reach out to the respective instructor and
        initiate a thorough investigation to determine the cause of the missing
        grade. Our system sends automated notifications to both students and
        instructors, ensuring everyone is aware of the ongoing process.
      </p>
      <p>
        If you're an administrator, you can access the Admin Dashboard to manage
        reported missing grades.
      </p>
    </>
  );
}
export default HomePage;
