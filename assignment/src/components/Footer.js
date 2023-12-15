import React from 'react';

const AppFooter = () => {
  return (
    <div className="container my-">
      <footer className="text-center text-lg-start border border-white mt-xl-5 pt-4" style={{ backgroundColor: '#0a4275'  }}>
        
        <div className="container p-4">
         
          <div className="row">
            
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <h5 className="text-uppercase mb-4 text-white">AcademiaTracker</h5>
              <ul className="list-unstyled mb-4">
                <li>
                  <a href="./Landing" className="text-white">Home</a>
                </li>
                <li>
                  <a href="./Dashboard" className="text-white">DashBoard</a>
                </li>
                
                <li>
                  <a href="./Login" className="text-white">Login</a>
                </li>
              </ul>
            </div>
          

            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <h5 className="text-uppercase mb-4 text-white">Assistance</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="./InstructorContact" className="text-white">Contact us</a>
                </li>
                <li>
                  <a href="./MissingGradeForm" className="text-white">Missing Grade Form</a>
                </li>
              
              </ul>
            </div>
             

            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <h5 className="text-uppercase mb-4 text-white">Questions</h5>
              <ul className="list-unstyled">
              <li>
                  <a href="./HelpAndSupport" className="text-white">FAQs</a>
                </li>
              </ul>
            </div>
             

            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <h5 className="text-uppercase mb-4 text-white">Sign up to our newsletter</h5>
              <div className="form-outline form-white mb-4">
                <input type="email" id="form5Example2" className="form-control" />
                <label className="form-label text-white" htmlFor="form5Example2">Email address</label>
              </div>
            
            </div>
           
          </div>
          
        </div>
        

       
        <div className="text-center p-3 border-top border-white">
          © 2020 Copyright:
          <a className="text-white" href="https://myaccount.google.com/?utm_source=chrome-profile-chooser&pli=1">sophieyawson12@gmail.com</a>
        </div>
        
      </footer>
    </div>
  );
};

export default AppFooter;
