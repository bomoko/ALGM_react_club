import React, { Component } from 'react';
import TodoApp from './components/TodoApp/component';
import logo from './logo.svg';
import TodoListManager from './TodoListManager.js';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.todoList = new TodoListManager();
    this.todoList.setStateTarget(this);

    //let's add some items for show
    this.todoList.addItem("Check off an existing item");
    this.todoList.addItem("Add a new one with the button above");

    this.state = {
      items: this.todoList.getItems()
    }

    this.populateItems = this.populateItems.bind(this);
  }

  populateItems(items) {
    this.setState(state => ({items: items}));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Just another TODO app</h1>
        </header>
        <div className="app-notes">
          <h4>Version 1 aims</h4>
          <ul>
            <li>Working prototype</li>
            <li>Using the OO approach to defining components (no pure functions)</li>
            <li>No styling - just enough to actually use the damn thing</li>
          </ul>
          <TodoApp items={this.state.items} 
                    addItem={(text) => {this.todoList.addItem(text);}} 
                    checkItem={(i) => {this.todoList.checkItem(i);}} 
                    removeItem={ (i) => {this.todoList.removeItem(i);}
          }/>
        </div>
      </div>
    );
  }
}

export default App;
