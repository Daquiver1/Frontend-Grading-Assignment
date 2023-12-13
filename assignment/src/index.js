import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './Pages/Login';
import './index.css';
import App from './App';
import Navbar from './Components/Navbar';
import GradeReportPage from './Pages/GradeReport';
import Dashboard from './Pages/Dashboard';
import MissingGradeFormPage from './Pages/MissingGradeReport';
import Landing from './Pages/Landing page';
import { reportWebVitals } from './reportWebVitals';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
