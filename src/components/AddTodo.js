import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const AddTodo = ({ dispatch }) => {
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
        // Dispatch the state of the input through the addToDo action.
        dispatch(addTodo(input.value));
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

export default connect()(AddTodo);
