import React, { Component } from 'react';
import AddTodo from './AddTodo';
import TodoListSwitcher from './TodoListSwitcher';
import Filters from './Filters';
import logo from './logo.svg';
import './App.css';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <div>
      <h2>Redux Todo</h2>
      <AddTodo />
    </div>
    <div>
      <TodoListSwitcher />
    </div>
    <div>
      <Filters />
    </div>
  </div>
);

export default App;
