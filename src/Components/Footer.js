import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <button className="footer-button">
        <Link className="footer-link" to="/">
          Back to Home
        </Link>
      </button>
      <div class="copyright">Copyright &#169; 2023 All rights reserved</div>
    </div>
  );
};
