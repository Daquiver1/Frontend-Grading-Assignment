import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import LandingPage from "./components/landing/LandingPage";
import Login from "./components/user/Login";
import StudentHome from "./components/studenthome/StudentHome";
import Dashboard from "./components/grade/Dashboard";
import MissingGradeForm from "./components/grade/MissingGradeForm";
import GradeReport from "./components/grade/GradeReport";
import HelpAndSupport from "./components/helpandsupport/HelpAndSupport";
import ContactInfo from "./components/instructor/ContactInfo";

//CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/main.css";

// Utils
import { isAuthenticated } from "./utils/auth";

// Implement Routing
const routing = (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={(props) => <LandingPage />} />
      <Route exact path="/login" component={(props) => <Login />} />
      <Route
        exact
        path="/studenthome"
        component={(props) => (isAuthenticated() ? <StudentHome /> : <Login />)}
      />
      <Route
        exact
        path="/dashboard"
        component={(props) => (isAuthenticated() ? <Dashboard /> : <Login />)}
      />
      <Route
        exact
        path="/mygrades"
        component={(props) => (isAuthenticated() ? <GradeReport /> : <Login />)}
      />
      <Route
        exact
        path="/report-missing-grade"
        component={(props) =>
          isAuthenticated() ? <MissingGradeForm /> : <Login />
        }
      />
      <Route
        exact
        path="/contact-faculty"
        component={(props) => <ContactInfo />}
      />
      <Route exact path="/support" component={(props) => <HelpAndSupport />} />
    </Switch>
    <Footer />
  </Router>
);

// ReactDOM.render(routing, document.getElementById("root"));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode>{routing}</React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
