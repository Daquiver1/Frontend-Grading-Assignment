import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./pages/LogInPage";
import Reset from "./pages/ResetPasswordPage";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route path="reset" element={<Reset />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
