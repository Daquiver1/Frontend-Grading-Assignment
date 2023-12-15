import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="quick-links-container">
          <h4>Quick Links</h4>
          <a href="http://localhost:3000">Home</a>
          <a href="http://localhost:3000/login">Login</a>
          <a href="http://localhost:3000/dashboard">Dashboard</a>
          <a href="http://localhost:3000/report">Grade Report</a>
          <a href="http://localhost:3000/missing">Grade Form</a>
          <a href="http://localhost:3000/instructors">Instructor Contact</a>
          <a href="http://localhost:3000/help">Help and Support</a>
        </div>
        <div className="contact-us-container">
          <h4>Get In Touch With Us</h4>
          <div className="contact-container">
            <img src={process.env.PUBLIC_URL + "./images/telephone-icon.png"} />
            <p> +233 501 382 035 </p>
          </div>
          <div className="contact-container">
            <img src={process.env.PUBLIC_URL + "./images/telephone-icon.png"} />
            <p>+233 599 145 698</p>
          </div>
          <div className="contact-container">
            <img src={process.env.PUBLIC_URL + "./images/telephone-icon.png"} />
            <p>+233 302 213 820</p>
          </div>
          <div className="mail-container">
            <img src={process.env.PUBLIC_URL + "./images/mail-icon.png"} />
            <p>pad@ug.edu.gh</p>
          </div>
          <p className="location-container">P.O.Box LG 25</p>
          <h4 className="newsletter-container">NewsLetter</h4>
          <p className="latest-container">Stay Updated With Our Latest</p>
          <div className="enter-email-container">
            <input type="text" placeholder="Enter Email Address" />
            <div className="arrow-container">
              <img
                src={
                  process.env.PUBLIC_URL + "./images/arrow-removebg-preview.png"
                }
              />
            </div>
          </div>
        </div>
        <div className="social-media-container">
          <h4>Social Media</h4>
          <div className="social-media">
            <img src={process.env.PUBLIC_URL + "./images/facebook.png"} />
            <a>Facebook</a>
          </div>
          <div className="social-media">
            <img src={process.env.PUBLIC_URL + "./images/twitter.png"} />
            <a>Twitter</a>
          </div>
          <div className="social-media">
            <img src={process.env.PUBLIC_URL + "./images/instagram.png"} />
            <a>Instagram</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
