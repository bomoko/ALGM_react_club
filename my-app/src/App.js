import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoListData from './endpoint/data';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

class App extends React.Component {
  state = {
    inputValue: "",
  };

  onInputChange = event =>
    this.setState({
    inputValue: event.target.value
  });

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

          <TodoList data={TodoListData} />

          <form>
            <TodoInput value={inputValue} onChange={this.onInputChange} />
          </form>

        </main>
      </div>
    );
  }
}

export default App;
