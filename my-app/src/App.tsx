// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import Dashboard from './Dashboard';
import LandingPage from './LandingPage';
import MissingGradeForm from './MissingGradeFormPage';
import LoginPage from './LoginPage';
import HelpInstructor from './InstructorContactPage';

import './App.css'

const App: React.FC = () => {
  return (
    <>
    <header className='Header'>
      
    </header>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/missinggradeform" element={<MissingGradeForm />} />
        <Route path="/loginpage" element={<LoginPage onLogin={function (username: string, password: string): void {
          throw new Error('Function not implemented.');
        } } />} />
        <Route path="/helpinstructor" element={<HelpInstructor />} />
      </Routes>
    </Router>

    <div className="app">
      <div className="img-container">
        <img src="src/assets/help.jpg" />
      </div>

      <div className="word-container">
        <h1>Finding it difficult to produe what You're Learning right?</h1>
      </div>
    </div>
    <footer className='footer'>
       <p>Footer</p>
    </footer>
    </>
  );
};

export default App;
