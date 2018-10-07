import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import { getNextTodoID } from '../actions';

const AddTodo = ({ dispatch, addToDo, totalTodos }) => {

  let input;

  return (
    <div>
      <form onSubmit={(e) => {
          // Prevent default form submission.
        e.preventDefault();
        // If no input given - do nothing.
        if (!input.value.trim()) {
          return;
        }

        let nextID = totalTodos++ + 1;
        // Dispatch the state of the input through the addToDo action.
        dispatch(addTodo(input.value, nextID));

        // Reset the input value to empty.
        input.value = '';
      }}>
        <input ref={(node) => (input) = node} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    totalTodos: state.fetchTodos.totalTodos,
  }
};

export default connect(mapStateToProps)(AddTodo);
