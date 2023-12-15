// MissingGrade.jsx

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MissingGrade.css';

const MissingGrade = () => {
  return (
    <div className="missing-grade-container">
      <div className="jumbotron text-center">
        <h1 className="display-4">Missing Grade Report</h1>
        <p className="lead">Report a Missing Grade</p>
        <hr className="my-4" />
        <p>Help us maintain accurate records by reporting any missing grades.</p>
      </div>
      <div className="container">
        <form>
          <div className="form-group">
            <label htmlFor="studentID">Student Name:</label>
            <input type="text" className="form-control" id="studentID" required />
          </div>
          <div className="form-group">
            <label htmlFor="course">Course:</label>
            <input type="text" className="form-control" id="course" required />
          </div>
          <div className="form-group">
            <label htmlFor="missingGrade">Missing Grade:</label>
            <textarea className="form-control" id="missingGrade" rows="3" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit Report</button>
        </form>
      </div>
    </div>
  );
};

export default MissingGrade;
