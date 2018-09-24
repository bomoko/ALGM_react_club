import React from 'react';

const TodoItem = ({ itemData }) => {
  return (
    <li>
      <label>
        <input type="checkbox" checked={itemData.checked} onClick={this.onChange}/>
        &nbsp;{itemData.text}
      </label>
    </li>
  );
};

export default TodoItem;
