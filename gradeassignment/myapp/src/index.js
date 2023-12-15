import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./Navbar.css"
import { BrowserRouter } from 'react-router-dom';
import LandingPage from './pages/LoginPage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter />
    <App />
    <LandingPage />
  </React.StrictMode>
);


