import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="container mt-5">
      <div className="jumbotron">
        <h1 className="display-4">Missing Grade Reporting System</h1>
        <p className="lead">Track and report missing grades easily!</p>
        <hr className="my-4" />
        <p>View your grades, report missing grades, and communicate with instructors or administration.</p>
        <p className="lead">
          <Link className="btn btn-primary btn-lg" to="/dashboard" role="button">
            View Dashboard
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
