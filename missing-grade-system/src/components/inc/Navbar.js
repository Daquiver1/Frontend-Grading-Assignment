import React from "react";
import {Link} from 'react-router-dom';

function Navbar() {

    return (

        <div className="navbar-dark bg-dark shadow">

            <div className="container">

                <div className="row">
                    <div className="col-md-12">


                    <nav class="navbar navbar-expand-lg bg-body-tertiary">
                 <div class="container-fluid">

    
         <Link to="/" class="navbar-brand">Missing Grade System</Link>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>

    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">

      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">

        <li class="nav-item">
          
          <Link to="/Landing" class="nav-link active">Landing</Link>
        </li>
        
        <li class="nav-item">
        <Link to="/Login" class="nav-link active">Login</Link>
        </li>

        <li class="nav-item">
        <Link to="/InstructorContact" class="nav-link active">InstructorContact</Link>
        </li>

        <li class="nav-item">
        <Link to="/Help" class="nav-link active">Help</Link>
        </li>
        
        

      </ul>
      
    </div>

  </div>
</nav>


                    </div>

                </div>

            </div>

        </div>


       
    )
}

    



    



export default Navbar;