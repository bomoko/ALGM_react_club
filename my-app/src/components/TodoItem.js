import React, { Component } from 'react';
import TodoCheckBox from './TodoCheckBox';
class TodoItem extends Component {
  onClick = () => {
    this.props.onClick(this.props.text);
  }

  render() {
    return (
      <li key={this.key}>
        <label>
          <TodoCheckBox checked={this.props.checked} onChange={this.onClick} />
          &nbsp;{this.props.text}
        </label>
      </li>
    );
  }
}

export default TodoItem;
