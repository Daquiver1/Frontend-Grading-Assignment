// AppFooter.js
import React from 'react';
import { Link } from 'react-router-dom';

const AppFooter = () => {
  return (
    <footer className="text-center text-lg-start bg-body-tertiary text-muted">
      <section>
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>EduGuard
              </h6>
              <p>
              EduGuard is an innovative grading report system designed to provide students with a user-friendly platform for seamlessly managing their academic performance.
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Links 
              </h6>
              <p>
              <Link to="/LandingPage" className="text-reset">Home</Link>
              </p>
              <p>
              <Link to="/LoginPage" className="text-reset">Login</Link>
              </p>
              <p>
              <Link to="/InstructorContact" className="text-reset">Instructors' Contacts</Link>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Pages
              </h6>
              <p>
                Missing Grade Form
              </p>
              <p>
                Dashboard
              </p>
              <p>
               Grade Report
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p><i className="fas fa-home me-3"></i> Accra, Ghana.</p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                eduguard@gmail.com
              </p>
              <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
              <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
            </div>
          </div>
        </div>
      </section>
      <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright: EduGuard.com
      </div>
    </footer>
  );
};

export default AppFooter;
