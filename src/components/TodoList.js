import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map(todo => {
      console.log({...todo});
      return (
        // Map through all todos and pass in the id as key, all the properties
        // of each todo using spread operator (e.g. text and completed), and
        // also call the toogleTodo function with the todo id.
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => toggleTodo(todo.id)}
        />
      );
    })}
  </ul>
);

export default TodoList;
