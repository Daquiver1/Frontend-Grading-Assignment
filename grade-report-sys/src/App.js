import React from "react";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Dashboard from "./pages/dashboard";
import Hnsupport from "./pages/hnsupport"; 
import Login from "./pages/login";
import Report from "./pages/report";
import Complain from "./pages/complain";
import Loginform from "./components/loginform/loginform";


function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route
                    path="/login"
                    element={<Login />}
                />
                <Route path="/contact" element={<Contact />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route
                    path="/report"
                    element={<Report />}
                />
                <Route path="/complain" element={<Complain />} />
                <Route path="/hnsupport" element={<Hnsupport />} />
            </Routes>
        </Router>
    );
}
 
export default App;
