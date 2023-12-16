import React from "react";
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
      <Link to='/'className="navbar-brand" >
          <img src="https://dcs.ug.edu.gh/img/comScience_logo.png"alt="logo" width="175" height="50" />
          </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to='/landiing' class="nav-link " aria-current="page">Home</Link>
        </li>
        <li class="nav-item">
          <Link to='/dashboard'class="nav-link">Dashboard</Link>
        </li>
        <li class="nav-item">
          <Link to='/login' class="nav-link" >Login</Link>
        </li>
        <li class="nav-item">
          <Link to='/report' class="nav-link" >Grade Report</Link>
        </li>
        <li class="nav-item">
          <Link to='/form' class="nav-link">Missing Grade Form</Link>
        </li>
        <li class="nav-item">
          <Link to='/contact'class="nav-link" >Contact</Link>
        </li>
        <li class="nav-item">
          <Link to='/help' class="nav-link">Help And Support</Link>
        </li>
         </ul>

    </div>
  </div>
</nav>
  );
}

export default Navbar;