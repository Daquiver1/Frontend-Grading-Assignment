import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        
         
          <div><nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
  <h1>Scholar Grade Support</h1>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
    <Link class="nav-link active" aria-current="page" to='/login'>Login</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link active" to='/Dashboard' aria-current="page">Dashboard</Link>
       
          
        </li>
        <li class="nav-item">
    <Link class="nav-link active" aria-current="page" to='/gradereport'>Grade Report</Link>
        </li>
        <li class="nav-item">
    <Link class="nav-link active" aria-current="page" to="/gradereportform">Missing Grade form</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link active" to='/InstructorPage' aria-current="page">Instructor</Link>
        </li>
        <li> <Link class="nav-link active" to='/Help and Support' aria-current="page">Help and Support</Link>
  </li>
        {/* <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Contacts
          </a>
          <ul class="dropdown-menu" >
            <li> <Link to='/InstructorPage' aria-current="page">Instructor</Link></li>
            <li> <Link to='/Help and Support' aria-current="page">Help and Support</Link>
  </li>
            
          </ul>
        </li> */}
      </ul>
    </div>
  </div>
</nav></div>
         
       
        
         
        
      </ul>
    </nav>
  );
};

export default Navbar;

