// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import DashboardPage from './components/Dashboard';
import GradeReportPage from './components/GradeReport';
import ContactInstructor from './components/ContactInstructor';
import MissingGradeForm from './components/MissingGradeForm';
import HelpAndSupport from './components/HelpAndSupport';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/grade-report" component={GradeReportPage} />
        <Route path="/contact-instructor" component={ContactInstructor} />
        <Route path="/missing-grade-form" component={MissingGradeForm} />
        <Route path="/help-support" component={HelpAndSupport} />
      </Switch>
    </Router>
  );
};

export default App;
