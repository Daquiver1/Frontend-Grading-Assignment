import React, { useState } from 'react';

const MissingGradeReportForm = () => {
  const [subject, setSubject] = useState('');
  const [grade, setGrade] = useState('');
  const [date,setDate] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <h2>Report Missing Grade</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="grade">Grade:</label>
          <input
            type="text"
            id="grade"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="subject">Date:</label>
          <input
            type="text"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MissingGradeReportForm;
