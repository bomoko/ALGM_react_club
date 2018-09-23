import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddTodo from './components/AddTodo';
import ClearTodo from './components/ClearTodo';
import TodoList from './components/TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [1, 2, 3],
      done: [],
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the React Club</h1>
        </header>
        <div className="App-intro">
          <h1>TODO React</h1>

          <AddTodo list={this.state.list} addItem={this.addItem.bind(this)} />
          <ClearTodo list={this.state.list} clearAll={this.clearAll.bind(this)} />
          <TodoList list={this.state.list} />
        </div>
      </div>
    );
  }

  addItem(item) {
    let newList = this.state.list
    newList.push(item);
    this.setState({
      list: newList,
    })
  }

  clearAll() {
    this.setState({
      list: [],
      done: [],
    });
  }
}

export default App;
