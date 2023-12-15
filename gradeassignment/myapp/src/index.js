import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "../src/styles/Navbar.css"
import LandingPage from './LandingPage';
import DashboardPage from './DashboardPage';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
    <LandingPage />
    <DashboardPage/>
  </React.StrictMode>
);


