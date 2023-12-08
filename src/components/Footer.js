import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import myImage from "../assets/img/comScience_logo.png";
import { Facebook, Twitter, Instagram } from "react-bootstrap-icons";
import "./Footer.css"; // Import your custom styles

const Footer = () => {
  return (
    <footer className="footer-area section-gap">
      <div className="container">
        <div className="row">
          {/* ... other columns ... */}
          <div className="col-lg-8 col-md-6 col-sm-6">
            <div className="single-footer-widget pt-10">
              <h4>Assigment of DCIT 205</h4>
              <p>Stay updated with our latest</p>
              <div id="mc_embed_signup">
                {" "}
                <form
                  action="YOUR_MAILCHIMP_FORM_ACTION_URL"
                  method="post"
                  id="mc-embedded-subscribe-form"
                  name="mc-embedded-subscribe-form"
                  className="validate"
                  target="_blank"
                  noValidate
                >
                  <label htmlFor="mce-EMAIL">
                    Subscribe to our newsletter:
                  </label>
                  <input
                    type="email"
                    name="EMAIL"
                    id="mce-EMAIL"
                    placeholder="Your email address"
                    required
                  />

                  <div
                    style={{ position: "absolute", left: "-5000px" }}
                    aria-hidden="true"
                  >
                    <input
                      type="text"
                      name="b_YOUR_MAILCHIMP_FORM_ID"
                      tabIndex="-1"
                      value=""
                      readOnly
                    />
                  </div>

                  <input
                    type="submit"
                    value="Subscribe"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    className="button"
                  />
                </form>
              </div>
            </div>
            <div>
              <img src={myImage} alt="Description" />{" "}
            </div>
          </div>
          {/* ... other columns ... */}
        </div>

        <p className="text-center">
          © 2023 All rights reserved. Copy and Created by Fabrice Ihongui
        </p>

        <div className="col-lg-6 col-sm-12 footer-social text-center">
          <div>
            {" "}
            <div>
              <Button variant="primary" href="https://facebook.com">
                <Facebook /> Facebook
              </Button>
              <Button variant="info" href="https://twitter.com">
                <Twitter /> Twitter
              </Button>
              <Button variant="danger" href="https://instagram.com">
                <Instagram /> Instagram
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
