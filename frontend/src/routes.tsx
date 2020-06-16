import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import HomePage from './pages/Home';
import CreatePointPage from './pages/CreatePoint';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={HomePage} exact path="/" />
        <Route component={CreatePointPage} path="/create-point" /> 
      </Switch>
    </BrowserRouter>
  )
}