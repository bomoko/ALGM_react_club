import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoListData from './endpoint/data';
import TodoList from './components/TodoList';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">TODOs</h1>
    </header>
    <p className="App-intro">
      What do you need to do?
    </p>

    <TodoList data={TodoListData} />

  </div>
);

export default App;
