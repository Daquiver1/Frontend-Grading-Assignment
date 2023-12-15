import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
              <div class="container-fluid">
                <Link to="/" class="navbar-brand">
                  Home
                </Link>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div
                  class="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <Link to="/login" class="nav-link active">
                        Login
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/dashboard" class="nav-link">
                        Dashboard
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/gradeReport" class="nav-link">
                        Grade Report
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/missingGrade" class="nav-link">
                        Missing Grade
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/instructorContact" class="nav-link">
                        Instructor Contact
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/help" class="nav-link">
                        Help
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
