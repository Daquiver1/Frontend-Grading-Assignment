import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import DashboardPage from './components/DashBoard';
import GradeReportPage from './components/GradeReport';
import MissingGradeFormPage from './components/MissingGradeForm';
import InstructorContactPage from './components/InstructorContactPage';
import HelpAndSupportPage from './components/HelpAndSupport';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/dashboard" component={DashBoard} />
          <Route path="/grade-report" component={GradeReport} />
          <Route path="/missing-grade-form" component={MissingGradeForm} />
          <Route path="/instructor-contact" component={InstructorContactPage} />
          <Route path="/help-and-support" component={HelpAndSupport} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
