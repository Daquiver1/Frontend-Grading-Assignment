import React from "react";

const Footer = () => {
  return (
    <footer className="bg-info text-white">
      <div className="container pt-4 mt-5 mb-0">
        <div className="row">
          <div className="col-md-4 ">
            <h4 className="fw-bold">Contact Us</h4>
            <p>
              <strong>Email:</strong> info@example.com
            </p>
            <p>
              <strong>Phone:</strong> +233 (573) 456-7890
            </p>
          </div>
          <div className="col-md-4 ">
            <h4 className="fw-bold">Address</h4>
            <p>University of Ghana</p>
            <p>Legon, Greater Accra</p>
          </div>
          <div className="col-md-4 ">
            <h4 className="fw-bold">Follow Us</h4>

            <a
              href="https://www.facebook.com/example"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="bi bi-facebook me-4 fs-1"></span>
            </a>

            <a
              href="https://twitter.com/example"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="bi bi-twitter me-4 fs-1"></span>
            </a>

            <a
              href="https://twitter.com/example"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="bi bi-instagram me-4 fs-1"></span>
            </a>

            <a
              href="https://twitter.com/example"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="bi bi-google me-4 fs-1"></span>
            </a>
          </div>
        </div>
        <hr className="my-4" />
        <p className="text-center bg-dark">
          &copy; 2023 Student's Grading Report System. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
