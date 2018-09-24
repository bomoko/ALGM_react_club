import React from 'react';

const TodoInput = ({value, onChange}) => (
  <label>
    <input type="text"
      value={value}
      placeholder="Get this done"
      onChange={onChange}
    />
  </label>
);

export default TodoInput;
