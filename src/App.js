// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage';
import Navbar from './Navbar';
import Footer from './Footer';
import LoginPage from './LoginPage';
import Dashboard from './Dashboard';
import GradeReport from './GradeReport';
import MissingGradeForm from './MissingGradeForm';
import InstructorContact from './InstructorContact';
import HelpAndSupport from './HelpAndSupport';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/grade-report" component={GradeReport} />
          <Route path="/missing-grade-form" component={MissingGradeForm} />
          <Route path="/instructor-contact" component={InstructorContact} />
          <Route path="/help-support" component={HelpAndSupport} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
