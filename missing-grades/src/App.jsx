// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import GradeReportPage from './pages/GradeReportPage';
import MissingGradeFormPage from './pages/MissingGradeFormPage';
import InstructorContactPage from './pages/InstructorContactPage';
import HelpSupportPage from './pages/HelpSupportPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/grade-report" component={GradeReportPage} />
        <Route path="/missing-grade-form" component={MissingGradeFormPage} />
        <Route path="/instructor-contact" component={InstructorContactPage} />
        <Route path="/help-support" component={HelpSupportPage} />
      </Switch>
    </Router>
  );
};

export default App;
