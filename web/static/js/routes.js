import React from 'react';
import App from './containers/app';
// import About from './containers/about';
import { Router, Route, NoMatch, browserHistory  } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'

const history = syncHistoryWithStore(browserHistory, store)

const routes = (
  <Router history={history}>
    <Route path='/' component={App}/>
    <Route path='*' component={NoMatch}/>
  </Router>
);

export default routes;
