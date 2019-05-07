import {
  createStore,
  applyMiddleware,
  combineReducers,
  compose
} from 'redux';
import thunk from 'redux-thunk'

const narratives = (state= [], action) => {
  switch(action.type) {
    case 'GET_DISORDERS_SUCCESS':
      return action.narratives;

      default: return state;
  }
}

const reducers = combineReducers({
  narratives: narratives
});

const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducers,
  composeEnhancers(
  applyMiddleware(...middleware)
  )
)
