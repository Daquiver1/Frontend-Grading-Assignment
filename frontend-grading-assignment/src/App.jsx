import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Help from "./routes/Help";
import ReportMissingGrade from "./routes/ReportMissingGrade";
import Contact from "./routes/Contact";
import Dashboard from "./routes/Dashboard";

import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js';
import $ from 'jquery';
import Sidebar from "./components/Sidebar";

function App() {

  useEffect(() => {
    // Sidebar Toggle Menu Click
    $("#menu-toggle").click(function (e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="MainDiv">
          <div className="row" id="wrapper">
            <div className="col-md-2">
                <Sidebar />
            </div>
         
            <div className="col-md-10 resize">
              <div className="page-content-wrapper">
                <nav className="navbar navbar-expand-lg navbar-light bg-blue border-bottom fixed-top py-3">
                    <button className="btn btn-primary" id="menu-toggle">
                    <i className="bi bi-list"></i>            
                    </button>
                    <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <div className="form">
                        <i className="bi bi-search"></i>
                        <input type="text" className="form-control form-input" placeholder="Search anything..." />
                        <span className="left-pan"><i className="bi bi-mic-fill"></i></span>
                      </div>
                      <ul className="navbar-nav ms-auto ml-auto mt-2 mt-lg-0">
                        
                          <li className="nav-item active">
                          <a className="nav-link" href="#">
                              Home <span className="sr-only">(current)</span>
                          </a>
                          </li>
                          <li className="nav-item">
                          <a className="nav-link" href="#">
                              Link
                          </a>
                          </li>
                          
                      </ul>
                    </div>
                </nav>

                <div className="container-fluid" style={{marginInline: "5px"}}>
                  <Routes>
                    <Route path="/"  element={ <Home />}/>
                    <Route path="login"  element={ <Login />}/>
                    <Route path="help"  element={ <Help />}/>
                    <Route path="report-missing-grade"  element={ <ReportMissingGrade />}/>
                    <Route path="contact" element={ <Contact />}/>
                    <Route path="dashboard" element={ <Dashboard />}/>
                  </Routes>
                </div>
              </div>
            </div>
          </div>
      </div>
      
    </BrowserRouter>
  )
}

export default App
