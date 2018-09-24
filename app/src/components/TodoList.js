import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
  render() {
    return (
      <div className="TodoList">
        {!this.props.list.length ? 
            <p>Nothing to do</p> : 
            <br/> 
        }

        {this.props.list.map(function(value, index) {
            return <TodoItem key={'item'+index} item={value} deleteItem={this.props.deleteItem} />
        }, this)}
      </div>
    );
  }
}

export default TodoList;
