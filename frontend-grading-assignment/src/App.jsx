
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Help from "./routes/Help";
import ReportMissingGrade from "./routes/ReportMissingGrade";
import Contact from "./routes/Contact";
import Dashboard from "./routes/Dashboard";
import GradeReport from "./routes/GradeReport"

const App = () => {
  useEffect(() => {
    const toggler = document.querySelector(".btn");
    toggler.addEventListener("click", function () {
      document.querySelector("#sidebar").classList.toggle("collapsed");
    });

    // Cleanup event listener when component unmounts
    return () => {
      toggler.removeEventListener("click", function () {
        document.querySelector("#sidebar").classList.toggle("collapsed");
      });
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="wrapper">
      {/* Sidebar */}
        <aside id="sidebar" className="bg-blue">
          <div className="h-100">
            <div className="sidebar-logo border border-bottom-white">
              <a href="/" className="">
                <i className="bi bi-mortarboard-fill ms-4 fs-1"></i>
              </a>
            </div>
            {/* Sidebar Navigation */}
            <ul className="sidebar-nav">
              {/* Sidebar content goes here */}
                  <li>
                    <a href="/" className="list-group-item list-group-item-action my-3 py-3 ps-5 border ">Home</a>
                  </li>
                  <li>
                    <a href="login" className="list-group-item list-group-item-action my-3 py-3 ps-5 border ">Login</a>
                  </li>
                  <li>
                    <a href="dashboard" className="list-group-item list-group-item-action my-3 py-3 ps-5 border ">Dashboard</a>
                  </li>
                  <li>
                    <a href="report-missing-grade" className="list-group-item list-group-item-action my-3 py-3 ps-5 border ">Missing Grade</a>
                  </li>
                  <li>
                    <a href="grade-report" className="list-group-item list-group-item-action my-3 py-3 ps-5 border ">Grade Report</a>
                  </li>
                  <li>
                    <a href="contact" className="list-group-item list-group-item-action my-3 py-3 ps-5 border ">Contact</a>
                  </li>
                  <li>
                    <a href="help" className="list-group-item list-group-item-action my-3 py-3 ps-5 border ">Help & Support</a>
                  </li>
            </ul>
          </div>
        {/* Main Component */}
        </aside>
        <div className="main">
          <nav className="navbar navbar-expand px-3 border-bottom bg-blue">
            {/* Button for sidebar toggle */}
            <button className="btn" type="button" data-bs-theme="dark">
              <span className="navbar-toggler-icon"></span>
            </button>
            {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button> */}
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                  </form>
                </li>
                
              </ul>
              
              <div>
                <a href="" className="text-white mx-3">
                  <i class="bi bi-bell fs-4"></i>
                </a>
                <a href="" className="text-white mx-3">
                  <img src="/"  className="rounded-circle img-fluid" alt=""  style={{width: "40px", height: "30px"}}/>
                </a>
                <a href="" className="text-white mx-3">
                 <i className="bi bi-box-arrow-right mx-2"></i> Logout
                </a>
              </div>
            </div>
          </nav>


          {/* <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">Navbar</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  
                </ul>
                
              </div>
            </div>
          </nav> */}
          <main className="content px-3 py-2">
            <div className="container-fluid">
              <div className="mb-3">
                <Routes>
                  <Route path="/" element={ <Home />}/>
                  <Route path="login" element={ <Login />}/>
                  <Route path="dashboard" element={ <Dashboard />}/>
                  <Route path="report-missing-grade" element={ <ReportMissingGrade />}/>
                  <Route path="contact" element={ <Contact />}/>
                  <Route path="help" element={ <Help />}/>
                  <Route path="grade-report" element={ <GradeReport />}/>
                </Routes>
              </div>
            </div>
          </main>

          <section>
            <footer>
              <div className="container-fluid py-4 bg-blue">
                 <div className="container py-3">
                    {/* <div className="row text-center align-items-end">
                      <div className="col-sm-6 col-md-6 col-xl-3">
                        <p className="py-2 text-start">Copyright ©2023</p>
                        <p className="text-start">Developed with 
                          <span><i className="bi bi-balloon-heart-fill text-danger px-2"></i></span>
                          by Richmond Andoh
                        </p>
                      </div>
                      {/* <div className="col-sm-6 col-md-6">
                        <div className="container">
                          <form action="">
                            <span>
                              <input type="email" name="personaEmail" id="email" className="form-control" />
                            </span>
                            <span>
                              <button type="submit" className="btn btn-warning bbtn-md">Subscribe</button>
                            </span>
                          </form>
                        </div>
                      </div> 
                    </div> */}
                    
                 </div>
                 <p className="text-center"> 
                      Copyright ©2023 | Dveloped with <span><i className="bi bi-balloon-heart-fill text-danger px-2"></i></span>
                      by Richmond Andoh
                    </p>
              </div>
            </footer>
          </section>
        </div>
      </div>
    </BrowserRouter>
  );
};
export default App;


