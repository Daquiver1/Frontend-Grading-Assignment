import React from "react";
import "./Footer.css"; 

function FooterComponent() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.elements.email.value;
    console.log(email); 
  };

  return (
    <footer className="footer">
      {" "}
      <section className="container">
        <h1>Missing Grade Report</h1>

        <div className="summary">
          {" "}

          <h2>
            <u>About</u>
          </h2>
          <p>
            A missing grade report website allows students to easily report
            incomplete grades and communicate directly with their instructors.{" "}
            <br />
            It tracks the status of missing grades, offering a transparent
            system for resolution while helping educators identify trends and
            provide targeted support.
          </p>
        </div>

        <div className="lc">
          <div className="contact">
            <h2>
              <u>Contact Us</u>
            </h2>
            <p>Phone & Email</p>
            <p>+111 552 382 5212</p>
            <p>+111 559 145 698</p>
            <p>Email: johndoe@example.com</p>
          </div>

          <div className="location">
            <h2>
              <u>Location</u>
            </h2>
            <p>123 Maple Street, Anytown, Ghana</p>
            <p>123 Maple Street, Anytown, USA</p>
          </div>
        </div>

        <div className="newsletter">
          <h2>
            <u>Newsletter</u>
          </h2>
          <p>Stay Updated with our latest</p>
          <form action="/email" method="get" onSubmit={handleSubmit}>
            <input
              type="email"
              id="email"
              placeholder="Type your email address"
              name="email"
              required
            />
            <input type="submit" id="enter" value="Enter" />
          </form>
        </div>

        <div className="finale">
          <p className="Copyright">Copyright ©2023 All rights reserved</p>{" "}
        
        </div>
      </section>
    </footer>
  );
}

export default FooterComponent;
