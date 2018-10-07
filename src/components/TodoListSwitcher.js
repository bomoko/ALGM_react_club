import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from './TodoList';
import { ToggleActionFilters, updateTodos } from '../actions';

// Switch that takes the todos and filter state, then goes through each filter
// and returns todos based off their completed property.
const getFilteredTodos = (todos, filter) => {
  switch (filter) {
    case ToggleActionFilters.SHOW_ALL:
      return todos;
    case ToggleActionFilters.SHOW_COMPLETED:
    console.log(todos.filter(t => t.completed));

      return todos.filter(t => t.completed);
    case ToggleActionFilters.SHOW_TODO:
    console.log(todos.filter(t => !t.completed));
      return todos.filter(t => !t.completed);
    default:
      throw new Error(filter);
  }
};

// Take state from the store and pass todos as props to be used inside of
// getFilteredTodos function above.
const mapStateToProps = (state) => {
  // @TODO: Update todos list to include both API todos and new todos into one
  // state

  
  return {
    todos: getFilteredTodos(state.fetchTodos.todos, state.toggleFiltersReducer)
  }
}

// Dispatch the toogleTodo action and pass in the id of todo.
const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (id) => dispatch(toggleTodo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
