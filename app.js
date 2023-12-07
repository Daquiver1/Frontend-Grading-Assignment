import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import GradeReportPage from './pages/GradeReportPage';
import MissingGradeFormPage from './pages/MissingGradeFormPage';
import InstructorContactPage from './pages/InstructorContactPage';
import HelpSupportPage from './pages/HelpSupportPage';

function App() {
  const appStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  };

  return (
    <Router>
      <div style={appStyle}>
        <Navbar />
        <Switch>
          
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
