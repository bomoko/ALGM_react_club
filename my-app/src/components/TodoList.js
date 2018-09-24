import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ data, onClick }) => (
  <form>
    <ul>
      {data.map(
        (item, index) => (
          <TodoItem key={index} itemData={item} onChange={onClick} />
        )
      )}
    </ul>
  </form>
);

export default TodoList;
