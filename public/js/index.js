import React from 'react'
import ReactDOM from 'react-dom'
import ReactGA from 'react-ga'
// import { Provider } from 'react-redux'
// import { createStore, applyMiddleware } from 'redux'
import { Router, browserHistory } from 'react-router'
// import reduxThunk from 'redux-thunk'

// import reducers from './reducers/index'
import routes from './routes'

// const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)
// const store = createStoreWithMiddleware(reducers)

const app = document.getElementById('app')

ReactGA.initialize('UA-83247312-1')
function logPageView() {
  ReactGA.pageview(window.location.pathname)
}

ReactDOM.render(
  // <Provider store={store}>
  <Router history={browserHistory} routes={routes} onUpdate={logPageView} />
  // </Provider>
  , app
)
