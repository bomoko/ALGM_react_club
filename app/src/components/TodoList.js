import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
  render() {
    return (
      <div className="TodoList">
        <h3>Todo List Items</h3>

        {!this.props.list.length ? 'No tasks' : '' }

        {this.props.list.map(function(value, index) {
            return <TodoItem key={'item'+index} item={value} deleteItem={this.deleteItem} />
        }, this)}
      </div>
    );
  }

  deleteItem(element) {
    var index = this.props.list.indexOf(element);
    if (index > -1) {
        this.props.list.splice(index, 1);
    }
  }

}

export default TodoList;
