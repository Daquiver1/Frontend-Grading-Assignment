// Footer.js

import React from "react";
import { IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import "./styles/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="main-footer">
        {/* Location */}
        <div className="footer-inner-content">
          <h2>Location</h2>
          <p>
            Legon first,
            <br />
            East Legon, Accra
            <br />
            GK-01586-008.
          </p>
        </div>

        {/* Our Services */}
        <div className="footer-inner-content">
          <h2>Our Services</h2>
          <p>
            Security Services
            <br />
            Computing Services
          </p>
        </div>

        {/* Contact */}
        <div className="footer-inner-content">
          <h2>Contact</h2>
          <p>
            Tel: +233-501 382 035 <br />
            Email: dcs@ug.edu.gh
          </p>
        </div>

        {/* Social Icons */}
        <div className="footer-inner-content social-icons">
          <h2>Follow Us</h2>
          <IconButton aria-label="Facebook">
            <Facebook />
          </IconButton>
          <IconButton aria-label="Twitter">
            <Twitter />
          </IconButton>
          <IconButton aria-label="Instagram">
            <Instagram />
          </IconButton>
          <IconButton aria-label="LinkedIn">
            <LinkedIn />
          </IconButton>
        </div>
      </div>

      {/* Additional content */}
      <div className="text-container"></div>
    </div>
  );
};

export default Footer;
