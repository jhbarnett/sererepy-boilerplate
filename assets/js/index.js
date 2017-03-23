import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import '../public/semantic/semantic.js';
import '../public/semantic/semantic.less';
import App from './App/App.jsx';
import { counter } from './reducers';

// Create a browser history
const history = createHistory()

//middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

const store = createStore(
  combineReducers({
    counter,
    router: routerReducer
  }),
  applyMiddleware(middleware)
)

render( 
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route path="/" component={App}/>
      </div>
    </ConnectedRouter>
  </Provider> , document.getElementById('container'))