
import "./App.css"
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Help from "./routes/Help";
import ReportMissingGrade from "./routes/ReportMissingGrade";
import Contact from "./routes/Contact";
import Dashboard from "./routes/Dashboard";
// import MissingGrade from "./routes/MissingGrade";

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
            <div className="sidebar-logo">
              <a href="/">
                <i className="bi bi-mortarboard-fill"></i>
              </a>
            </div>
            {/* Sidebar Navigation */}
            <ul className="sidebar-nav">
              {/* Sidebar content goes here */}
                  <li>
                    <a href="/" className="list-group-item list-group-item-action my-3 py-3 ms-5">Home</a>
                  </li>
                  <li>
                    <a href="login" className="list-group-item list-group-item-action my-3 py-3 ms-5">Login</a>
                  </li>
                  <li>
                    <a href="dashboard" className="list-group-item list-group-item-action my-3 py-3 ms-5">Dashboard</a>
                  </li>
                  <li>
                    <a href="report-missing-grade" className="list-group-item list-group-item-action my-3 py-3 ms-5">Report Grade</a>
                  </li>
                  <li>
                    <a href="missing-grade" className="list-group-item list-group-item-action my-3 py-3 ms-5">Missing Grade</a>
                  </li>
                  <li>
                    <a href="contact" className="list-group-item list-group-item-action my-3 py-3 ms-5">Contact</a>
                  </li>
                  <li>
                    <a href="help" className="list-group-item list-group-item-action my-3 py-3 ms-5">Help & Support</a>
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
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Link</a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </nav>
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
                  {/* <Route path="missing-grade" element={ <MissingGrade />}/> */}
                </Routes>
              </div>
            </div>
          </main>

          <section>
            <footer>
              <div className="container-fluid py-5 bg-blue">

              </div>
            </footer>
          </section>
        </div>
      </div>
    </BrowserRouter>
  );
};
export default App;


