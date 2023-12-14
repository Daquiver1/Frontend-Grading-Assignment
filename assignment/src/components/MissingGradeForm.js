import React, { useState } from 'react';

const AppMissingGradeForm = () => {
  const [studentName, setStudentName] = useState('');
  const [studentID, setStudentID] = useState('');
  const [courseCode, setCourseCode] = useState('');
  const [instructorEmail, setInstructorEmail] = useState('');
  const [reason, setReason] = useState('');

  const handleStudentNameChange = (e) => {
    setStudentName(e.target.value);
  };

  const handleStudentIDChange = (e) => {
    setStudentID(e.target.value);
  };

  const handleCourseCodeChange = (e) => {
    setCourseCode(e.target.value);
  };

  const handleInstructorEmailChange = (e) => {
    setInstructorEmail(e.target.value);
  };

  const handleReasonChange = (e) => {
    setReason(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Student Name:', studentName);
    console.log('Student ID:', studentID);
    console.log('Course Code:', courseCode);
    console.log('Instructor Email:', instructorEmail);
    console.log('Reason:', reason);

    // Clear the form fields after submission
    setStudentName('');
    setStudentID('');
    setCourseCode('');
    setInstructorEmail('');
    setReason('');
  };

  return (
    <div className="container mt-5">
      <h1>Missing Grade Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="studentName" className="form-label">
            Student Name
          </label>
          <input
            type="text"
            className="form-control"
            id="studentName"
            value={studentName}
            onChange={handleStudentNameChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="studentID" className="form-label">
            Student ID
          </label>
          <input
            type="text"
            className="form-control"
            id="studentID"
            value={studentID}
            onChange={handleStudentIDChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="courseCode" className="form-label">
            Course Code
          </label>
          <input
            type="text"
            className="form-control"
            id="courseCode"
            value={courseCode}
            onChange={handleCourseCodeChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="instructorEmail" className="form-label">
            Instructor Email
          </label>
          <input
            type="email"
            className="form-control"
            id="instructorEmail"
            value={instructorEmail}
            onChange={handleInstructorEmailChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="reason" className="form-label">
            Reason for Missing Grade
          </label>
          <textarea
            className="form-control"
            id="reason"
            rows="4"
            value={reason}
            onChange={handleReasonChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AppMissingGradeForm;

