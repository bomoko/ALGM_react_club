import React from 'react';

const TodoItem = ({itemData}) => {
  return (
    <li>{itemData.text}</li>
  );
};

export default TodoItem;
