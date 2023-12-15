import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage';

export function App() {
  return (
    <Router>
      <Switch>
        <Route path="/LandingPage" exact component={LandingPage} />
        {/* Add routes for other pages */}
      </Switch>
    </Router>
  );
}
