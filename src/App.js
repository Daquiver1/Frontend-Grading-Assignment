import React from "react";
import "./index.css"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./components/pages/Landing";
import Login from "./components/pages/Login";
import Navbar from "./components/Navbar";
import Missing from "./components/pages/Missing";
import Help from "./components/pages/Help";
import Dashboard from "./components/pages/Dashboard";
import Instructors from "./components/pages/Instructors";


export default function App() {
  return (
    <>
      <Navbar />
    <Router>
      <Routes>
        <Route path="/" exact Component={Landing} />
        <Route path="/login" Component={Login} />
        <Route path="/missing" Component={Missing } />
        <Route path="/landing" Component={Landing} />
        <Route path="/help" Component={Help} />
        <Route path="/dashboard" Component={Dashboard} />
        <Route path="/instructors" Component={Instructors} />

       
        
      </Routes>
    </Router>
    </>
  );
}

