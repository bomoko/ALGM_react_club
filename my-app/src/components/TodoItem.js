import React from 'react';
import TodoCheckBox from './TodoCheckBox';

const TodoItem = ({ itemData }) => {
  return (
    <li>
      <label>
        <TodoCheckBox checkedProps={itemData.checked} />
        {itemData.text}
      </label>
    </li>
  );
};

export default TodoItem;
