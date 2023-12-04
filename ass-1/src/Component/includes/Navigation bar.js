import React from "react";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <Link class="navbar-brand">MENU</Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDarkDropdown"
          aria-controls="navbarNavDarkDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <button
                class="btn btn-dark dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </button>
              <ul class="dropdown-menu dropdown-menu-dark">
                <li>
                  <Link href="/HomePage">Home</Link>
                </li>
                <li>
                  <Link href="/login">Login</Link>
                </li>
                <li>
                  <Link href="/Dashboard">Dashboard</Link>
                </li>
                <li>
                  {" "}
                  <Link href="GradeReportPage">Report Grade</Link>
                </li>
                {/* <li>
                  {" "}
                  <a href="MissingGradeFormPage">Missing Grade Form Page</a>
                </li>
                <li>
                  {" "}
                  <a href="MissingGradeFormPage">Missing Grade Form Page</a>
                </li> */}
                <li>
                  <a href="Help and Support Page">Help </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
