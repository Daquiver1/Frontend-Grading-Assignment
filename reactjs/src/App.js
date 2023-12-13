// App.js

import React from 'react';
import { Route, Switch, NavLink, Router } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import DashboardPage from './components/DashboardPage';
import GradeReportPage from './components/GradeReportPage';
import MissingGradeFormPage from './components/MissingGradeFormPage';
import InstructorContactPage from './components/InstructorContactPage';
import HelpAndSupportPage from './components/HelpAndSupportPage';

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/login" activeClassName="active">Login</NavLink></li>
          <li><NavLink to="/dashboard" activeClassName="active">Dashboard</NavLink></li>
          <li><NavLink to="/grade-report" activeClassName="active">Grade Report</NavLink></li>
          <li><NavLink to="/missing-grade-form" activeClassName="active">Report Missing Grade</NavLink></li>
          <li><NavLink to="/instructor-contact" activeClassName="active">Instructor Contact</NavLink></li>
          <li><NavLink to="/help-and-support" activeClassName="active">Help and Support</NavLink></li>
        </ul>
      </nav>

      <Router>
        <Route path="/" exact component={LandingPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/grade-report" component={GradeReportPage} />
        <Route path="/missing-grade-form" component={MissingGradeFormPage} />
        <Route path="/instructor-contact" component={InstructorContactPage} />
        <Route path="/help-and-support" component={HelpAndSupportPage} />
      </Router>
    </div>
  );
};

export default App;
