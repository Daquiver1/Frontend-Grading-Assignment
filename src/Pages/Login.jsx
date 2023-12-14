import React from "react";
import Header from "../Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";


const StudentLogin = () => {

  return (
    <>
      <Header />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header bg-info text-white">
                <p className="text-center fw-800 h1">STUDENT'S LOGIN</p>
              </div>
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Student's Email:
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="studentEmail"
                      name="studentEmail"
                      required
                     
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="ID" className="form-label">
                      Student's ID:
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="ID"
                      name="ID"
                      required
                      
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Student's PIN:
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      required
                      
                    />
                  </div>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input mt-4"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                      required
                    />
                    <label
                      className="form-check-label mt-3"
                      htmlFor="flexSwitchCheckDefault"
                    >
                      Are you Human?
                    </label>
                  </div>

                  <div className="d-grid">
                    <a
                      href="/Dashboard"
                      className="btn btn-outline-primary shadow mt-5"
                    >
                      Login
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentLogin;
