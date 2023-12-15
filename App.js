import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import DashboardPage from './components/DashboardPage';
import GradeReportPage from './components/GradeReportPage';
import MissingGradeFormPage from './components/MissingGradeFormPage';
import InstructorContactPage from './components/InstructorContactPage';
import HelpAndSupportPage from './components/HelpAndSupportPage';

function App() {
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
        <Footer />
      </div>
    </Router>
  );
}

export default App;
