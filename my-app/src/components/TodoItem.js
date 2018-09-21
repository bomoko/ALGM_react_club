import React from 'react';
import TodoInput from './TodoCheckBox';

const TodoItem = ({ itemData }) => {
  return (
    <li>
      <label>
        <TodoInput checkedProps={itemData.checked} />
        {itemData.text}
      </label>
    </li>
  );
};

export default TodoItem;
