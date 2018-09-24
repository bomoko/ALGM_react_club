import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    return (
      <div className="TodoItem">
        {this.props.item} 
        <button onClick={() => this.props.deleteItem(this.props.item)}>x</button>
      </div>
    );
  }
}

export default TodoItem;
