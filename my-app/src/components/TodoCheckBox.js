import React from 'react';

const TodoCheckBox = ({ checkedProps }) => {
  return (
    <input type="checkbox" checked={checkedProps} onChange={this.onClick} />
  );
};

export default TodoCheckBox;
