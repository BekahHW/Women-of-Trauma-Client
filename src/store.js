import {
  createStore,
  applyMiddleware,
  combineReducers
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

export default createStore(
  reducers,
  applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)
