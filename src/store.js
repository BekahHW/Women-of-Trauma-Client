import {
  createStore,
  applyMiddleware,
  combineReducers,
  compose
} from 'redux';
import thunk from 'redux-thunk'

const narrativesReducer = (state= [], action) => {
  switch(action.type) {
    case 'GET_DISORDERS_SUCCESS':
      return action.disorders;

      default: return state;
  }
}

const reducers = combineReducers({
  narratives: narrativesReducer
});

const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducers,
  composeEnhancers(
  applyMiddleware(...middleware)
  )
)
