import React, { useState } from 'react';
import './reportingform.css'; // Import your CSS file

const TechS = () => {
  return(
    <div className="loginsect">
  <hr />
  <div className="text">
    <form action="/action_page.php" method="post" className='complaintform'>

      <div className="container">
      <div>Contact Us for Support:</div>
        <label htmlFor="uname">
          <b>STUDENT ID</b>
        </label>
        <input type="text" placeholder="Enter Student ID" name="uname" required />

        <label htmlFor="psw">
          <b>PROGRAMME</b>
        </label>
        <input type="password" placeholder="Enter Programme of study" name="psw" required />

        <label htmlFor="uname">
          <b>STUDENT E-MAIL</b>
        </label>
        <input type="text" placeholder="Enter student e-mail" name="uname" required />

        <label htmlFor="uname">
          <b>PHONE NUMBER</b>
        </label>
        <input type="text" placeholder="Enter your phone number" name="uname" required />

        <label htmlFor="uname">
          <b>WHAT DO YOU WANT HELP WITH?</b>
        </label>
        <input type="text" placeholder="Egs: Reporting a missing grade" name="uname" required />

        <label htmlFor="uname">
          <b>HOW WOULD YOU WANT TO BE CONTACTED?</b>
        </label>
        <input type="text" placeholder="Phone or E-mail?" name="uname" required />

        <button type="submit">Submit</button>
      </div>

      
    </form>
  </div>
</div>
  )
  
};

export default TechS;
