import React from "react";
import DeparmentImage from '../Assets/comScience_logo.png';
import './landing.css';

const Landing = () => {
  return (
    <div className="container">
      <body>
        <section className="header">
          <nav>
            <img src={DeparmentImage} alt="Department Logo" className="logo" />
            <div className="nav-links" id="navLinks">
              <ul>
                <li><a href="Home.html">Home</a></li>
                <li><a href="About.html">About</a></li>
                <li><a href="Catalog.html">Catalog</a></li>
                <li><a href="Events.html">Events</a></li>
                <li><a href="Contact.html">Contacts</a></li>
                <li><a href="Research.html">Research</a></li>
              </ul>
            </div>
          </nav>
        </section>

        <section className="footer">
          <div className="container">
            <div className="row">
              <div className="footer-column">
                <h4>Admission</h4>
                <ul>
                  <li>
                    <a href="#">Undergraduate</a>
                    <a href="#">Graduate</a>
                    <a href="#">International Students</a>
                    <a href="#">Entry Requirements</a>
                  </li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>Contact Us</h4>
                <ul>
                  <li>
                    <p>
                      +233 501 382 035 <br />
                      +233 559 145 698 <br />
                      dcs@ug.edu.gh
                    </p>
                  </li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>Location</h4>
                <ul>
                  <li>
                    <p>
                      University Of Ghana, Legon Campus <br />
                      Opposite Mathematics Department
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="form">
              <h4>Newsletter</h4>
              <p className="news">Stay updated with our latest</p>
              <input className="form-control" type="email" name="EMAIL" placeholder="Enter Email Address" required="" validate="" />
              <button type="submit">Submit</button>
            </div>
          </div>
          <div className="icons">
            <i className="fa fa-facebook"></i>
          </div>
          <div className="copyright">
            <p>Copyright &copy;{new Date().getFullYear()} All rights reserved</p>
          </div>
        </section>
      </body>
    </div>
  );
};

export default Landing;
