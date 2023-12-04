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
          <Route path="/LogiePagw" component={LoginPage} />
          <Route path="/DashBoard" component={DashBoard} />
          <Route path="/GradeReport" component={GradeReport} />
          <Route path="/MissingGradeForm" component={MissingGradeForm} />
          <Route path="/InstructorContactPage" component={InstructorContactPage} />
          <Route path="/HelpAndSupport" component={HelpAndSupport} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
