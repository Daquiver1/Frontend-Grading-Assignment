import { useState } from 'react'
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './component/LoginPage';
import Dashboard from './component/Dashboard';
import Navbar from './Navbar';
import LandingPage from './component/LandingPage';
import GradeReportPage from './component/GradeReportPage';
import MissingGradeFormPage from './component/MissingGradeFormPage';
import InstructorContactPage from './component/InstructorContactPage';
import HelpAndSupportPage from './Component/HelpAndSupportPage';



const App = () => {
  return (
  
    <Router>
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/grade-report" component={GradeReportPage} />
        <Route path="/missing-grade-form" component={MissingGradeFormPage} />
        <Route path="/instructor-contact" component={InstructorContactPage} />
        <Route path="/help-and-support" component={HelpAndSupportPage} />
      </Switch>
    </div>
  </Router>
   
  );
};

export default App;
 // <div className="app-container">
     // <LoginPage />
    //  <Dashboard/>
     // <Navbar/>
      
    //</div>





























