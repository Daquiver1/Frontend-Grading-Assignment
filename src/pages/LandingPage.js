<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";
=======
import React from 'react';
import { Link } from 'react-router-dom';
>>>>>>> 662660e15a81a570f74d97e68046aac253a23758

const LandingPage = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 offset-md-2 text-center">
          <h1>Welcome to the Missing Grade Reporting System</h1>
          <p>
            The ultimate tool for students to track and report missing grades.
          </p>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">View Your Grades</h5>
              <p className="card-text">
                Access your academic profile and view your current grades.
              </p>
<<<<<<< HEAD
              <Link to="/Login" className="btn btn-primary">
                Go to Login
=======
              <Link to="/dashboard" className="btn btn-primary">
                Go to Dashboard
>>>>>>> 662660e15a81a570f74d97e68046aac253a23758
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Report Missing Grades</h5>
              <p className="card-text">
                Report any missing grades not recorded in your profile.
              </p>
              <Link to="/missing-grade-form" className="btn btn-primary">
                Report Missing Grades
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Contact Instructors</h5>
              <p className="card-text">
                Communicate with your instructors or academic administration.
              </p>
              <Link to="/instructor-contact" className="btn btn-primary">
                Contact Instructors
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-8 offset-md-2 text-center">
          <p>
<<<<<<< HEAD
            Need further assistance? Visit our{" "}
=======
            Need further assistance? Visit our{' '}
>>>>>>> 662660e15a81a570f74d97e68046aac253a23758
            <Link to="/help-and-support">Help and Support</Link> page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
