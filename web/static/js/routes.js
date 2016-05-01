import React from 'react';
import App from './containers/app';
// import About from './containers/about';
import { Router, Route, NoMatch  } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

const routes = (
  <Router history={createBrowserHistory()}>
    <Route path='/' component={App}/>
    <Route path='*' component={NoMatch}/>
  </Router>
);

export default routes;
