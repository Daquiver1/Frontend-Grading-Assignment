import React from "react";
import DeparmentImage from '../Assets/comScience_logo.png';
import './landing.css';

const Landing = () => {
  return (
    <div className="container_land">
      <img src={DeparmentImage} alt="Department Logo" className="logo_land" />
      <h3>Academic Records</h3>
      <div className="content_land">
        <table>
          <th></th>
        </table>
      </div>

        <div className="footer_land">
          <div className="container_land">
            <div className="row_land">
              <div className="footer-column_land">
                <h4>Admission</h4>
                <ul>
                  <li>
                    <p>Undergraduate</p>
                    <p>Graduate</p>
                    <p>International Students</p>
                    <p>Entry Requirements</p>
                  </li>
                </ul>
              </div>
              <div className="footer-column_land">
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
              <div className="footer-column_land">
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
            <div className="form_land">
              <h4>Newsletter</h4>
              <p className="news_land">Stay updated with our latest</p>
              <input className="form-control_land" type="email" name="EMAIL" placeholder="Enter Email Address" required="" validate="" />
              <button type="submit">Submit</button>
            </div>
          </div>
          <div className="icons_land">
            <i className="fa fa-facebook"></i>
          </div>
          <div className="copyright_land">
            <p>Copyright &copy;{new Date().getFullYear()} All rights reserved</p>
          </div>
        </div>
    </div>
  );
};

export default Landing;
