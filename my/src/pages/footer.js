import React from "react";

const Footer = () => {
  const footerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: 'cyan',
    padding: '20px',
    marginTop: '20px',
    textAlign: 'center',
    borderTop: '1px solid #ddd'
  };

  const sectionStyle = {
    maxWidth: '300px', // Adjust the maximum width of each section as needed
  };

  return (
    <footer style={footerStyle}>
      <div style={sectionStyle}>
        <h3> Academic Rules </h3>
        <ul>
          <li>Follow the code of conduct</li>
          <li>Submit assignments on time</li>
          <li>Participate actively in class discussions</li>
          <li>Respect your peers and instructors</li>
          <li>Refer to the syllabus for course details</li>
        </ul>
      </div>
      <div style={sectionStyle}>
        <h3> EXAMINATION </h3>
        <ul>
          <li>Follow the code of conduct</li>
          <li>Submit assignments on time</li>
          <li>Participate actively in class discussions</li>
          <li>Respect your peers and instructors</li>
          <li>Refer to the syllabus for course details</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

