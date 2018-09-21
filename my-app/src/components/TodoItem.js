import React from 'react';
import TodoInput from './TodoInput';

const TodoItem = ({itemData}) => {
  return (
    <li>
      <label>
        <TodoInput checked={itemData.checked} />
        {itemData.text}
      </label>
    </li>
  );
};

export default TodoItem;
