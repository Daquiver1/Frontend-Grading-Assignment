import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import Support from "./Support";
import Login from "./Login";
import Dashboard from "./Dashboard";
import App from "./App";
import CInstructor from "./CInstructor";
import GradeReport from "./GradeReport";
import Complaint from "./Complaint";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>


);
reportWebVitals();
