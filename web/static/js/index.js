import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { reduxReactRouter, ReduxRouter } from 'redux-router';
import { createHistory } from 'history';
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, NoMatch } from 'react-router';
import rootReducer from './reducers';
import App from './containers/app';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

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

ReactDOM.render(
  <Provider store={store}>
    { /* Tell the Router to use our enhanced history */ }
    <Router history={history}>
      <Route path='/' component={App}/>
      <Route path='*' component={NoMatch}/>
    </Router>
  </Provider>,
  document.getElementById('root')
)
