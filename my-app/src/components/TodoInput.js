import React from 'react';

const TodoInput = ({ checked }) => {
  return (
    <input type="checkbox" checked={checked} />
  );
};

export default TodoInput;
