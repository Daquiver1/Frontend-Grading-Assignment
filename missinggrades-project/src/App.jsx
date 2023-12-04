import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

  return (
    <>
     <nav className="navbar navbar-expand-sm fixed top navbar-dark bg-dark">
        <a  href="#" className ="navbar-brand mb-0 h1">Find Me</a>

        <button
          type = "button"
          data-bs-toggle="collapse" 
          data-bs-target = "#navbarNav" 
          className="navbar-toggler"
          aria-controls="navbarNav"
          aria-expanded ="false"
          aria-label="Toggle Navigation"> 
          <span className="navbar-toggler-icon"></span>   
        </button>

        <div 
          className="collapse navbar-collapse"
          id="navbarNav">
          <ul className="navbar-nav ms-auto mb-1 mb-lg-0">
              <li className="nav-item active">
                <a href="#" className="nav-link active">
                  Home
                </a>
              </li>
              <li className="nav-item active">
                <a href="#" className="nav-link active">
                  DashBoard
                </a>
              </li>
              <li className="nav-item active">
                <a href="#" className="nav-link active">
                  Grade Report
                </a>
              </li>
              <li className="nav-item active">
                <a href="#" className="nav-link active">
                  Contact
                </a>
              </li>
              <li className="nav-item active">
                <a href="#" className="nav-link active">
                  Help And Support
                </a>
              </li> 
            </ul>
        </div>
      </nav>

      <div class="mt-5 p-4 bg-dark text-white text-center">
        <p>Footer</p>
      </div>

      
    </>
  )
}

export default App
