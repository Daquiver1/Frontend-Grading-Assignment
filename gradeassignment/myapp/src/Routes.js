import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Landingpage } from './Landingpage';

export const Routes =() => {
  return(
    <Router>
      <Switch>
        <Route path="/">
          <Landingpage />
        </Route>
      </Switch>
    </Router>
  )
}