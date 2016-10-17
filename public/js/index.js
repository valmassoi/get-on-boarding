import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Router, browserHistory } from 'react-router'
import reduxThunk from 'redux-thunk'

import reducers from './reducers/index'
import routes from './routes'

//TODO http://stackoverflow.com/questions/35305661/where-to-write-to-localstorage-in-a-redux-app

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)
const store = createStoreWithMiddleware(reducers)

const app = document.getElementById('app')


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , app
)
