import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LandingPage } from './src/pages/LandingPage';

export const Routes =() => {
  return(
    <Router>
      <Switch>
        <Route path="./" exact>
          <LandingPage />
        </Route>

      </Switch>
    </Router>
  )
}
