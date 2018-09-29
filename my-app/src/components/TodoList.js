import React, { Component } from 'react';
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';

class TodoList extends Component {

  state = {
    items: this.props.items,
    inputValue: '',
    checkedValue: '',
  };

  onInputChange = event =>
    this.setState({
      inputValue: event.target.value
    });

  // Add an item
  addItem = (event) => {
    event.preventDefault();
    this.setState({
      items: this.state.items.concat([{
        text: this.state.inputValue,
        checked: false,
      }]),
      inputValue: '',
    });
  }

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

        <form onSubmit={this.addItem}>
          <TodoInput value={inputValue} onChange={this.onInputChange} />
        </form>
      </div>
    );
  }
}

export default TodoList;
