import React from "react";
import  TwitterIcon from "@mui/icons-material/Twitter";
import  LinkedinIcon from "@mui/icons-material/LinkedIn";
import YoutubeIcon from "@mui/icons-material/YouTube";
import  FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        
        <div className="footer-icons">
          <TwitterIcon />
          <LinkedinIcon />
          <YoutubeIcon />
          <FacebookIcon />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Qualtiy</span>
          <span>Help</span>
          <span>Share</span>
          <span>Carrers</span>
          <span>Testimonials</span>
          <span>Work</span>
        </div>
        <div className="footer-section-columns">
          <span>244-5333-7783</span>
          <span>hello@food.com</span>
          <span>press@food.com</span>
          <span>contact@food.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;