import React, { useState } from 'react';
import desw from "../images/doubt.jpg"


export const Missinggradeform = () => {
  const [studentName, setStudentName] = useState('');
  const [course, setCourse] = useState('');
  const [grade, setGrade] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Course:', course);
    console.log('Grade:', grade);
    setStudentName('');
    setCourse('');
    setGrade('');
  };

  return (
    <section className="main-s1">

    <div className="I1">
      <div className="containerqq">

<div className="form">
  <div className="contact-info">
    <h3 id="label" className="title">Fill In the Deatils To submit Your Complaints</h3>
    <p className="text">
      All Issues will be addressed to your student mail
    </p>
  </div>
  <div className="contact-form">
    <span className="circle one"></span>
    <span className="circle two"></span>

    <form action="index.html" autocomplete="off">
      <h3 className="title">Complaint Report</h3>
      <div className="input-container">
        <input type="text" name="name" className="input" />
        <label for="">Username</label>
        <span>Username</span>
      </div>
      <div className="input-container">
        <input type="email" name="email" className="input" />
        <label for="">Email</label>
        <span>Email</span>
      </div>
      <div className="input-container">
        <input type="tel" name="phone" className="input" />
        <label for="">Phone</label>
        <span>Phone</span>
      </div>
      <div className="input-container textarea">
        <textarea name="message" className="input"></textarea>
        <label for="">Message</label>
        <span>Message</span>
      </div>
      <input type="submit" value="Send" className="btn" />
    </form>
  </div>
</div>
</div>
      </div> 
  </section>
  );
};