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
                  <a href="#!" className="text-white">About us</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Collections</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Environmental philosophy</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Artist collaborations</a>
                </li>
              </ul>
            </div>
          

            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <h5 className="text-uppercase mb-4 text-white">Assistance</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#!" className="text-white">Contact us</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Size Guide</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Shipping Information</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Returns & Exchanges</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Payment</a>
                </li>
              </ul>
            </div>
             

            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <h5 className="text-uppercase mb-4 text-white">Careers</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#!" className="text-white">Jobs</a>
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
          <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
        </div>
        
      </footer>
    </div>
  );
};

export default AppFooter;
