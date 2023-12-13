import LoginPage from "./components/LoginPage";
import HomePage from "./components/Homepage";
import DashboardPage from "./components/DashboardPage";
import GradeReportPage from "./components/GradeReportPage";
import MissingGradeForm from "./components/MissingGradeForm";
import InstructorContactPage from "./components/InstructorContactPage";
import HelpSupportPage from "./components/HelpSupportPage";
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="App">
            <div className="App-header">
              <Link to="/">Login</Link>
            </div>
            <div className="App-header">
              <Link to="/HomePage">Home page</Link>
            </div>
            <div className="App-header">
              <Link to="/DashboardPage">Dashboard</Link>
            </div>
            <div className="App-header">
              <Link to="/GradeReportPage">Grade Report Page</Link>
            </div>
            <div className="App-header">
              {" "}
              <Link to="/MissingGradeForm">MissingGradeForm</Link>
            </div>
            <div className="App-header">
              {" "}
              <Link to="/InstructorContactPage">Contact Instructor</Link>
            </div>
            <div className="App-header">
              {" "}
              <Link to="/HelpSupportPage">Help and Support</Link>
            </div>
          </div>

          <Routes>
            <Route exact path="/" element={<LoginPage />}></Route>
            <Route exact path="/HomePage" element={<HomePage />}></Route>
            <Route
              exact
              path="/DashboardPage"
              element={<DashboardPage />}
            ></Route>
            <Route
              exact
              path="/GradeReportPage"
              element={<GradeReportPage />}
            ></Route>
            <Route
              exact
              path="/MissingGradeForm"
              element={<MissingGradeForm />}
            ></Route>
            <Route
              exact
              path="/InstructorContactPage"
              element={<InstructorContactPage />}
            ></Route>
            <Route
              exact
              path="/HelpSupportPage"
              element={<HelpSupportPage />}
            ></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
