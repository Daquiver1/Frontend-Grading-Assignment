import { useState } from "react";
import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/login";
import Landing from "./pages/landing";
import Layout from "./pages/layout";
import { Dashboard } from "./pages/dashboard";
import { GradeReport } from "./pages/grade report";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Layout />
                <Routes>
                  <Route index element={<Landing />} />
                </Routes>
              </>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="grade-report" element={GradeReport}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

export default App;
