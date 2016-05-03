import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { reduxReactRouter, ReduxRouter } from 'redux-router';
import { createHistory } from 'history';
import { Router, Route, browserHistory, NoMatch } from 'react-router';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { devTools, persistState } from 'redux-devtools';
import rootReducer from '../reducers';
import App from '../containers/app';
// import routes from '../routes';

import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

// const loggerMiddleware = createLogger();
// const createStoreWithMiddleware = compose(
//   applyMiddleware(
//     thunkMiddleware, // lets us dispatch() functions
//     loggerMiddleware // neat middleware that logs actions
//   ),
//   reduxReactRouter({
//     routes,
//     createHistory
//   }),
//   // devTools()
// )(createStore);

const store = createStore(
  combineReducers({
    ...rootReducer,
    routing: routerReducer
  })
)

const history = syncHistoryWithStore(browserHistory, store)

const routes = (
  <Router history={history}>
    <Route path='/' component={App}/>
    <Route path='*' component={NoMatch}/>
  </Router>
);

export default store;
