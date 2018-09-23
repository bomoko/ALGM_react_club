import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    return (
      <div className="TodoItem">
        {this.props.item} 
        <button onClick={() => this.markDone()}>x</button>
      </div>
    );
  }

  markDone() {
    this.props.deleteItem(this);
  }
}

export default TodoItem;
