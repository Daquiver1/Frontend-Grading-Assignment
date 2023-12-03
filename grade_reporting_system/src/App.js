import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import LoginPage from './Components/LoginPage';
import HomePage from './Components/HomePage';
import DashboardPage from './Components/DashboardPage';
import GradeReportPage from './Components/GradeReportPage';
import MissingGradeFormPage from './Components/MissingGradeFormPage';
import InstructorContactPage from './Components/InstructorContactPage';
import HelpSupportPage from './Components/HelpAndSupportPage';

function App() {
  return (
    <Router>
    <Switch>
      <Route path="/" exact component={LandingPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/home" component={HomePage} />
      <Route path="/dashboard" component={DashboardPage} />
      <Route path="/grade-report" component={GradeReportPage} />
      <Route path="/missing-grade-form" component={MissingGradeFormPage} />
      <Route path="/instructor-contact" component={InstructorContactPage} />
      <Route path="/help-support" component={HelpSupportPage} />
      {/* Add more routes for other pages */}
    </Switch>
  </Router>
  );
}

export default App;
