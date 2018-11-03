import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';


const App = () => {

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

        <TodoList />

      </main>
    </div>
  );
};

export default App;

