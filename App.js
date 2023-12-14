import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import './style.css';
import HomePage from './Homepage';
import LandingPage from './LandingPage';
import DashboardPage from './DashboardPage';
import HelpSupportPage from './HelpSupportPage';
import MissingGradeFormPage from './MissingGradeFormPage';
import ICP from './ICP';
import LoginPage from './LoginPage';

function App() {
  return (
    <Router>
      <Link to='/HomePage'>HomePage</Link>&nbsp;  &nbsp;
      <Link to='/landing'>GradeReport</Link> &nbsp;  &nbsp;
      <Link to='/dashboard'>DashboardPage</Link> &nbsp;  &nbsp;
      <Link to='/HelpSupportPage'>HelpSupportPage</Link>&nbsp;  &nbsp;
      <Link to='/MissingGradeFormPage'>MissingGradeFormPage</Link>&nbsp;  &nbsp;
      <Link to='/ICP'>ICP</Link>&nbsp;  &nbsp;
      <Link to='/LoginPage'>LoginPage</Link>&nbsp;  &nbsp;

      <Routes>
      <Route path="/HomePage" element={<HomePage/>} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/HelpSupportPage" element={<HelpSupportPage />} />
        <Route path="/MissingGradeFormPage" element={<MissingGradeFormPage/>} />
        <Route path="/ICP" element={<ICP/>} />
        <Route path="/loginPage" element={<LoginPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
