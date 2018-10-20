import React, { Component } from 'react';
import TodoItem from './TodoItem';
import CreateTodoWithMutation from './TodoInput';

class TodoList extends Component {

  state = {
    items: this.props.items,
    inputValue: '',
    checkedValue: '',
  };

  // Add an item - Moves to component with Mutation
  // addItem = (event) => {
  //   event.preventDefault();
  //   this.setState({
  //     items: this.state.items.concat([{
  //       text: this.state.inputValue,
  //       checked: false,
  //     }]),
  //     inputValue: '',
  //   });
  // }

  // Check an item
  checkItem = (text) => {
    this.setState({
      items: this.state.items.map(item => {
        if (item.text !== text) return item;

        return {
          ...item,
          checked: !item.checked,
        };
      }),
    });
  }

  render() {
    const { inputValue, items } = this.state;

    return (
      <div>
        <form>
          <ul>
            {items.map(
              (item, index) => (
                <TodoItem
                  key={index}
                  text={item.text}
                  checked={item.checked}
                  onClick={this.checkItem}
                />
              )
            )}
          </ul>
        </form>

        <CreateTodoWithMutation inValue={inputValue} />
      </div>
    );
  }
}

export default TodoList;
