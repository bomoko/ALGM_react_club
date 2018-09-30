import { ToggleActionFilters } from '../actions';

// ToggleFilter Reducer.

// A simple reducer that sets the filter state taken from the setToggleFilters
// action.
// By deafult, set initial state as 'SHOW_ALL'.
const toggleFiltersReducer = (state = ToggleActionFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case 'SET_TOGGLE_FILTER':
    // console.log(action.filter);
    // Return filter state.
      return action.filter
    default:
      return state
  }
}

export default toggleFiltersReducer;
