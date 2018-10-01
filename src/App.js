import React, { Component } from 'react';
import TodoApp from './components/TodoApp/component';
import logo from './logo.svg';
import TodoListManager from './TodoListManager.js';
import './App.css';
import {connect} from 'react-redux';
import * as actions from './redux/actions';

class App extends Component {
  constructor(props) {
    super(props);
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
          <h4>Version 2 aims</h4>
          <ul>
            <li>Hook up Redux</li>
          </ul>
        </div>
        <TodoApp items={this.props.items} 
                    addItem={(text) => { this.props.addItem(text);}} 
                    checkItem={(i) => { this.props.checkItem(i);}} 
                    removeItem={ (i) => { this.props.removeItem(i);}}
          />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { items: state.items };
};

export default connect(mapStateToProps, {
  addItem: actions.addTodoItem,
  checkItem: actions.checkTodoItem,
  removeItem: actions.removeTodoItem
})(App);
