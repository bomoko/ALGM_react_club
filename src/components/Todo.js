import React from 'react';

const ifCompleted = (completed, text) => {
  if (completed) {
    return (
      <input type="checkbox" value="{text}" checked />
    )
  }
  else {
    return (
      <input type="checkbox" value="{text}"/>
    )
  }
};

const Todo = ({ onClick, completed, text }) => (
  <li onClick={onClick} style={{ textDecoration: completed ? 'line-through' : 'none' }}>
    {ifCompleted(completed)} {text}
  </li>
);

export default Todo;
