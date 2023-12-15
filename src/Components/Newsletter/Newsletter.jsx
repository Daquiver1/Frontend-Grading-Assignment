import React from "react";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <h1>Get exclusive alerts directly sent to your mail!</h1>
      <p>
        Add your email below and stay informed about updates and improvements.{" "}
      </p>
      <div>
        <input type="email" placeholder="Your Email Address"></input>
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default Newsletter;
