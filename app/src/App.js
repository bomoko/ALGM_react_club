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
      list: [],//[1, 2, 3],
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
          <h2>Todo List</h2>
          <hr/>

          <AddTodo list={this.state.list} addItem={this.addItem.bind(this)} />
          {this.state.list.length ?
            <ClearTodo list={this.state.list} clearAll={this.clearAll.bind(this)} />
            :''
          }
          <TodoList list={this.state.list} deleteItem={this.deleteItem.bind(this)} />
        </div>
      </div>
    );
  }

  addItem(item) {
    let newList = this.state.list
    newList.push(item)
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

  deleteItem(element) {
    var index = this.state.list.indexOf(element);
    if (index > -1) {
        let newList = this.state.list;
        newList.splice(index, 1)
        this.setState({
          list: newList,
        })
    }
  }
}

export default App;
