import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import Notification from './Notification';
import './App.css';


const App = () => {
  return (
    <Router className="after">
      <div>
        <Link className="login-button" to="/login">
          Login
        </Link>

        {/* Add a new Link for the Dashboard */}
        <Link className="dashboard-button" to="/dashboard">
          Dashboard
        </Link>

        <Switch>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/dashboard" exact> 
            <Dashboard />
          </Route>
          <Route path="/notification" exact>
            <Notification />
          </Route>
          <Route path="/">
            <div>
              <div className="card">
                <p className='gytr'><b>Missing Grade Reporting System</b></p>
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
