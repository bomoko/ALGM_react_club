import { combineReducers } from 'redux';
import fetchTodos from './fetchTodos';
import todosReducer from './todosReducer';
import toggleFiltersReducer from './toggleFiltersReducer';

// As reducers is where the state actually gets updated and sent to the store,
// whatever reducers actually get passed into the combineReducers method, will
// therefore update the state saved in the store.
// Then any changes to the state will then flow down to our components through
// the mapStateToProps functions. This then completes the redux loop of managing
// state.
export default combineReducers({
  fetchTodos,
  todosReducer,
  toggleFiltersReducer
});
