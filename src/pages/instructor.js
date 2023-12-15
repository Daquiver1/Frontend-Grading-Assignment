import React from "react";
import "./Instructor.css"

export const Instructor = () => {
  return (
        <section className="main-s1">

          <div className="I1">
            <div className="containerqq">
      <span className="big-circle"></span>
      <img src="img/shape.png" className="square" alt="" />
      <div className="form">
        <div className="contact-info">
          <h3 id="label" className="title">Let's get in touch</h3>
          <p className="text">
            Interact with our Instructors from the department of computer science.
          </p>

          <div className="info">
            <div className="information">

              <p>UG Accra Ghana</p>
            </div>
            <div className="information">
              <p>dcit.cbas@ug.edu.gh</p>
            </div>
            <div className="information">
              <p>055-907-4843</p>
            </div>
          </div>


        </div>

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form action="index.html" autocomplete="off">
            <h3 className="title">Contact us</h3>
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