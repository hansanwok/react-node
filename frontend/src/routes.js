import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from 'containers/App/App';
import A from 'containers/A';

const routes = () => (
  <Switch>
    <Route exact path='/' component={App} />
    <Route exact path='/a' component={A} />
  </Switch>
);

export default routes;