import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Landingpage from './pages/Landingpage';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import InstructorsContact from './pages/InstructorsContact';
import HelpAndSupport from './pages/HelpAndSupport';
import Gradereportpage from './pages/Gradereportpage';
import MissingGradeForm from './pages/MissingGradeForm';
import './App.css';
import './components/Sidebar.css'; 

function App() {
  return (
    <Router>
      <div className="app-cointainer">
        <div className="content-container">
          <Sidebar />
          <div className="main-container">
            <Routes>
              <Route path="/" element={<Landingpage />} />
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/InstructorsContact" element={<InstructorsContact />} />
              <Route path="/HelpAndSupport" element={<HelpAndSupport />} />
              <Route path="/Gradereportpage" element={<Gradereportpage />} />
              <Route path="/MissingGradeForm" element={<MissingGradeForm />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
