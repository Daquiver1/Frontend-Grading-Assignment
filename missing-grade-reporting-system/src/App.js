// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import DashboardPage from './components/DashboardPage';
import GradeReportPage from './components/GradeReportPage';
import MissingGradeFormPage from './components/MissingGradeFormPage';
import InstructorContactPage from './components/InstructorContactPage';
import HelpAndSupportPage from './components/HelpAndSupportPage';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/dashboard" component={DashboardPage} />
            <Route path="/grade-report" component={GradeReportPage} />
            <Route path="/missing-grade-form" component={MissingGradeFormPage} />
            <Route path="/instructor-contact-page" component={InstructorContactPage} />
            <Route path="/help-and-support-page" component={HelpAndSupportPage} />
          </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
