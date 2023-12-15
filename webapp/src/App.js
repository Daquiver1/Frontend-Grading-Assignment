import React from "react";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/homepage";
import About from "./components/Missing Grade";
import Login from "./components/login";
import InstructorContact from "./components/Instructor Contact page";
import Dashboard from "./components/Dashboard Page";
import GradeReport from "./components/Grade report";
import help_and_support from "./components/Help and Support";
import "./App.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





function App() {
    return(
         <div className="App-header">
      
    
      <ToastContainer/>
         <BrowserRouter>
        
         
        
            <Navbar  />
           
            <Routes >
              <Route  path="/home" Component={Home} /> 
              <Route path="/About" Component={About } /> 
              <Route path="/Login" Component={Login} /> 
              <Route path="/InstructorContact" Component={InstructorContact} /> 
              <Route path="/Dashboard" Component={Dashboard} /> 
              <Route path="/GradeReport" Component={GradeReport} /> 
              <Route path="/help_and_support" Component={help_and_support} /> 
              </Routes>
           </BrowserRouter>
           
          
          
        
      
       
      </div>
      
    );
}

export default App;