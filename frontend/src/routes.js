import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import App from 'containers/App/App';
import A from 'containers/A';
import B from 'containers/Login';
import C from 'containers/C';


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => {
    const isAuth = localStorage.getItem('authToken');
    if (!isAuth) {
      return <Redirect to={{
        pathname: '/login',
        state: { from: props.location, },
      }} />
    }

    return <Component {...props} />;
  }} />
);

const routes = () => (
  <Switch>
    <Route exact path='/' component={App} />
    <Route exact path='/a' component={A} />
    <Route exact path='/login' component={B} />
    <PrivateRoute exact path='/c' component={C} />
  </Switch>
);

export default routes;