import React, { Component } from 'react';

class ClearTodo extends Component {
  render() {
    return (
      <div className="ClearTodo">
        <button onClick={() => this.props.clearAll()}>Clear all</button>
      </div>
    );
  }
}

export default ClearTodo;
