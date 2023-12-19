import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Report from './components/Report';
import FAQ from './components/FAQ';
import InstructorContactPage from './components/InstructorContactPage';
import CurrentGrade from './components/CurrentGrade';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/Dashboard' element={<Dashboard />}/>
        <Route path='/Login' element={<Login />}/>
        <Route path='/Report' element={<Report />}/>
        <Route path='/FAQ' element={<FAQ />}/>
        <Route path='/InstructorContactPage' element={<InstructorContactPage />}/>
        <Route path='/CurrentGrade' element={<CurrentGrade />}/>
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
