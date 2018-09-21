import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({data}) => (
  <ul>
    {data.map(
      (item, index) => (
        <TodoItem key={index} itemData={item} />
      )
    )}
  </ul>
);

export default TodoList;
