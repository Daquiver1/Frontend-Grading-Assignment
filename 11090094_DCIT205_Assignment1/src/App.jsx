import { useState } from "react";
import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/login";
import Landing from "./pages/landing";
import Layout from "./pages/layout";
import { Dashboard } from "./pages/dashboard";
import { GradeReport } from "./pages/grade report";
import { Missing_Grade_Form } from "./pages/missing grade form";
import { Instructor_Contact } from "./pages/instructor contact";
import { Help_and_Support } from "./pages/help and support";

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
          <Route
            path="missing_grade_report"
            element={Missing_Grade_Form}></Route>
          <Route path="instructor_contact" element={Instructor_Contact}></Route>
          <Route path="help_and_support" element={Help_and_Support}></Route>
        </Routes>
      </BrowserRouter>

      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Landing />} />
            <Route path="login" element={<Login />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="*" element={<Missing_Grade_Form />} />
          </Route>
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);

export default App;
