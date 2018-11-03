import React from 'react';

const TodoCheckBox = ({ checked, onChange }) => {
  let input;

  return (
    <input type="checkbox"
      checked={checked}
      onChange={onChange}
    />

  );
};

export default TodoCheckBox;
