import React from "react";

const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-5 col-12 ft-1">
              <h3>
                <span>Edward</span>Hanson
              </h3>
              <p></p>
              <div className="footer-icons">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-linkedin-in"></i>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 col-12 ft-2">
              <h5>Quick Links</h5>
              <ul>
                <li className="nav-item">
                  <a className="" href="/">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">
                    Contact Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">
                    Portfolio
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-4 col-12 ft-3">
              <h5>Quick Links</h5>
              <p>
                <i class="fa-solid fa-phone-volume"></i> 0576652815
              </p>
              <p>
                <i class="fa-solid fa-envelope"></i> hans18edward@gmail.com
              </p>
              <p>
                <i class="fa-solid fa-paper-plane"></i> Accra, Ghana
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="Last-footer">
        <p></p>
      </div>
    </>
  );
};

export default Footer;
