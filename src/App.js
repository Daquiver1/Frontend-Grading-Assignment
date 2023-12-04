// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landingpage from './components/Landingpage';
import LoginPage from './components/LoginPage';
import DashboardPage from './components/DashBoard';
import GradeReportPage from './components/GradeReport';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Landingpage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/dashboard" component={DashBoard} />
      <Route path="/grade-report" component={GradeReport} />
      {/* Add more routes for other pages */}
    </Router>
  );
}

export default App;