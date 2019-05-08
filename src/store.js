import {
  createStore,
  applyMiddleware,
  combineReducers,
  compose
} from 'redux';
import thunk from 'redux-thunk'

import narratives from './reducers/narratives'
import disorders from './reducers/disorders'
import narrativeFormData from './reducers/narrativeFormData'

const reducers = combineReducers({
  narratives,
  disorders,
  narrativeFormData
});

const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducers,
  composeEnhancers(
  applyMiddleware(...middleware)
  )
)
