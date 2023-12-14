import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Homepage';
import Login from './Pages/Login';
import Dashboard from './Pages/dashboard';
import GradeReport from './Pages/GradeReport';
import MissingGradeForm from './Pages/MissingGradeForm';
import Contact from './Pages/ContactUs';
import HelpAndSupport from './Pages/HelpAndSupport';


const App = () => {
  return (
    <Router>
     

        <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/login" exact Component={Login} />
        <Route path="/dashboard" exact Component={Dashboard} />
        <Route path="/grade-report" exact Component={GradeReport} />
        <Route path="/missing-grade-form" exact Component={MissingGradeForm} />
        <Route path="/contact-us" exact Component={Contact} />
        <Route path="/help-and-support" exact Component={HelpAndSupport} />
            
         
        </Routes>
    
    </Router>
  );
};

export default App;
