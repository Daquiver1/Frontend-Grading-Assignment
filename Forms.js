import React from 'react';


function Form() {
  const handleSubmit = (event) => {
    event.preventDefault(); 
    
  };

  return (
    <div>
      <h1>Missing Grade Forms</h1>

      <div className="form-container">
        <form id="missingGradeForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="studentName">Student Name</label>
            <input type="text" id="studentName" name="studentName" required />
          </div>

          <div className="form-group">
            <label htmlFor="studentId">Student ID</label>
            <input type="text" id="studentId" name="studentId" required />
          </div>

          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="text" id="phoneNumber" name="phoneNumber" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="creditHours">Number of Credit Hours</label>
            <input type="number" id="creditHours" name="creditHours" required />
          </div>

          <div className="form-group">
            <label htmlFor="courseTitle">Course Title</label>
            <input type="text" id="courseTitle" name="courseTitle" required />
          </div>

          <div className="form-group">
            <label htmlFor="reason">Reason</label>
            <textarea id="reason" name="reason" required></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="studentSignature">Student Signature</label>
            <input type="text" id="studentSignature" name="studentSignature" required />
          </div>

          <div className="form-group">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;