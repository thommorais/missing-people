import thunk from 'redux-thunk'
import {
  createStore, applyMiddleware, compose,
} from 'redux'

import reducers from './ducks'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(reducers, composeEnhancer(applyMiddleware(thunk)))
