import React from "react";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/homepage";
import About from "./components/Aboutpage";
import Login from "./components/login";
import InstructorContact from "./components/Instructor Contact page";
import Dashboard from "./components/Dashboard Page";
import GradeReport from "./components/Grade report";
import Contact from "./components/Help and Support";
import "./App.css";
import footer from "./components/footer/footer";






function App() {
    return(
         <div className="App-header">
      
    
         
         <BrowserRouter>
        
        
          
            <Navbar  />
           
            <Routes >
              <Route  path="/Home" Component={Home} /> 
              <Route path="/About" Component={About } /> 
              <Route path="/Login" Component={Login} /> 
              <Route path="/InstructorContact" Component={InstructorContact} /> 
              <Route path="/Dashboard" Component={Dashboard} /> 
              <Route path="/GradeReport" Component={GradeReport} /> 
              <Route path="/Contact" Component={Contact} /> 
              </Routes>
           </BrowserRouter>
          
          
        
           <footer/>   
      </div>
       
    );
}

export default App;