import "./CustomNavbar.css";
import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY)
        }

        //Attach the event listener when the component is mounted
        window.addEventListener("scroll", handleScroll);

        //remove the event listener when the compnent is unmounted
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])
    
    return (

        <div>
            <nav className={`navbar navbar-expand-lg fixed-top ${scrollY >= 10 ? " scrolled" : ""}`}>
                <div class="container-fluid">
                    <a className="navbar-brand" href="#">
                      <i className="bi bi-mortarboard-fill text-primary fs-1"></i>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active m-2 text-white" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                               <a className="nav-link m-2 text-white" href="login">Login</a>
                            </li>
                            
                            <li className="nav-item">
                               <a className="nav-link m-2 text-white" href="dashboard" aria-disabled="true">Dashboard</a>
                            </li>
                            <li className="nav-item">
                               <a className="nav-link m-2 text-white" href="report-grade" aria-disabled="true">Report Grade</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link m-2 text-white" href="missing-grade" aria-disabled="true">Missing Grade</a>
                            </li>

                            <li className="nav-item">
                               <a className="nav-link m-2 text-white" href="contact" aria-disabled="true">Contact</a>
                            </li>

                            <li className="nav-item">
                              <a className="nav-link m-2 text-white" href="help" aria-disabled="true">Help & Support</a>
                            </li>
                        </ul>
                        {/* <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;