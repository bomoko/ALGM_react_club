import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoListData from './endpoint/data';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

class App extends React.Component {
  state = {
    items: TodoListData,
    inputValue: "",
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
  // checkItem = (text) => {
  //   this.setState({
  //     items: this.state.items.map(item => {
  //       if (item.text !== text) return item;

  //       return {
  //         ...item,
  //         checked: !item.checked,
  //       };
  //     }),
  //   });
  // }

  render() {
    const { inputValue, onInputChange } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">TODOs</h1>
        </header>

        <main>
          <p className="App-intro">
            What do you need to do?
          </p>

          <TodoList data={this.state.items} onCheckboxChange={this.checkInputValue} />

          <form onSubmit={this.addItem}>
            <TodoInput value={inputValue} onChange={this.onInputChange} />
          </form>

        </main>
      </div>
    );
  }
}

export default App;
