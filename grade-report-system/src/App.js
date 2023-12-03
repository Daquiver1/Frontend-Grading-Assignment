import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./pages/LogInPage";
import Reset from "./pages/ResetPasswordPage";
import LandingPage from './pages/LandingPage';
import Dashboard from "./pages/Dashboard";



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<LandingPage/>}/>
          <Route path="/index" element={<LandingPage/>}/>
          <Route path="/login" element={<LogIn />} />
          <Route path="reset" element={<Reset />} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
