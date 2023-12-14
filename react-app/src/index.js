import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import Login from './Components/Login';
import Home from './Components/Home';
import Contactx from './Components/Contactx';
import GradeReport from './Components/GradeReport';
import Dashboard from './Components/Dashboard';
import MissingGradeForm from './Components/MissingGradeForm';
import InstructorContact from './Components/InstructorContact';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/GradeReport" element={<GradeReport />} />
      <Route path="/Contactx" element={<Contactx />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/MissingGradeForm" element={<MissingGradeForm />} />
      <Route path="/InstructorContact" element={<InstructorContact />} />
      
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

