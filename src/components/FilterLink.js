import { connect } from 'react-redux';
import { setToggleFilters } from '../actions';
import Link from './Link';

// mapStateToProps is a function which maps the store's state to the components.
// This example takes the applications state and current component props as
// parameters.
const mapStateToProps = (state, props) => ({
  // Return new active prop and its status dependant on if props filter matches
  // toggleFilters state.
  // The filter prop type gets passed in from the Filters component.
  active: props.filter === state.toggleFilters,
});

// mapDispatchToProps is a function where the component can now update new state
// in the store through the dispatch of actions, which in turns sends it off to
// a reducer and eventually updates the state.
//
// Dispatch is simply a method available from the Redux store that dispatches
// actions. The setToggleFilters action sets the type of toggle fitler on click.
// The action recieves the filter state here and exports the new state.
const mapDispatchToProps = (dispatch, props) => ({
  onClick: () => dispatch(setToggleFilters(props.filter))
});

// When connected to the Redux store you now have access to the store's state
// and methods (e.g dispatch()).
// The connect method always takes two arguments which are always mapStateToProps
// and mapDispatchToProps.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);
