import React from 'react';
import logo from './logo.svg';
import './App.css';
// import TodoListData from './endpoint/data';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';

import TodoList from './components/TodoList';

const App = ({ data: { loading, error, todos } }) => {

  if (loading) {
    return <p>Loading ...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }

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

        <TodoList items={todos} />

      </main>
    </div>
  );
};

const todoListQuery = gql `
  query TodoListQuery {
    todos {
      id
      text
      checked
    }
  }
`;

const AppWithData = graphql(todoListQuery)(App);

export default AppWithData;
