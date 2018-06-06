import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxPromise from 'redux-promise'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import reducers from './reducers'

import PostsIndex from './containers/posts-index'
import PostsNew from './containers/posts-new'
import PostsShow from './containers/posts-show'
import Nav from './components/nav'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)

ReactDOM.render(
  <Provider
    store={createStoreWithMiddleware(
      reducers,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )}
  >
    <Router>
      <div>
        <Nav />
        <Route path='/new' component={PostsNew} />
        <Route path='/posts/:id' component={PostsShow} />
        <Route exact path='/' component={PostsIndex} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)
