
import React, { useState } from 'react';



function Missing () {
  const [missingGradeInfo, setMissingGradeInfo] = useState({
    studentName: '',
    course: '',
    details: '',
  });
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMissingGradeInfo((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div>
      <Navbar />
      <HelpSection
        missingGradeInfo={missingGradeInfo}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

function Navbar() {
  const navbarStyle = {
    background: 'blue',
    padding: '10px',
    color: 'white',
    textAlign: 'center',
  };

  const linkStyle = {
    color: 'white',
    margin: '0 10px',
    textDecoration: 'none',
  };

  return (
    <nav style={navbarStyle}>
      <a href="#home" style={linkStyle}>
        Home
      </a>
      <a href="#help" style={linkStyle}>
        Help & Support
      </a>
    </nav>
  );
}

function HelpSection({ missingGradeInfo, handleChange, handleSubmit }) {
  const helpSectionStyle = {
    background: '#f4f4f4',
    padding: '40px',
    textAlign: 'center',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const inputStyle = {
    margin: '10px',
    padding: '8px',
    width: '300px',
  };

  const buttonStyle = {
    background: '#333',
    color: 'white',
    padding: '10px',
    cursor: 'pointer',
    border: 'none',
    fontSize: '1em',
  };

  return (
    <section id="help" style={helpSectionStyle}>
      <h2>Missing Grade</h2>
      <p>Having trouble with missing grades? Let us know, and we'll assist you!</p>
      <form style={formStyle} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder=" Student ID"
          style={inputStyle}
          name="studentName"
          value={missingGradeInfo.studentName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Course Name"
          style={inputStyle}
          name="course"
          value={missingGradeInfo.course}
          onChange={handleChange}
          required
        />
        <textarea
          placeholder="Details of the Issue"
          style={inputStyle}
          name="details"
          value={missingGradeInfo.details}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" style={buttonStyle}>
          Submit



        </button>
            
            

      </form>
    </section>
    
  );
  
}


  

export default Missing ;
