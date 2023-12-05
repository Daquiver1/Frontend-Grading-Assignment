import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter
} from "react-router-dom";
import Homepage from './Pages/Homepage'
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import GradeReport from './Pages/GradeReport';
import HelpandSupport from './Pages/HelpandSupport';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router  data-test="component-app">
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/Login">
        <Login />
        </Route>
        <Route path="/Dashboard">
        <Dashboard />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

