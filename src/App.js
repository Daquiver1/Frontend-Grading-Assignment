import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Login from './Login';

const App = () => {
  return (
    <Router>
      <div>
        <Link className="login-button" to="/login">
          Login
        </Link>

        <Switch>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/">
            <div>
              <div className="card">
                <p><strong>Missing Grade Reporting System</strong></p>
                <p className="card-footer">This website is used to enable students to view their grades, report missing grades and communicate with their instructors or academic administration</p>
              </div>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
