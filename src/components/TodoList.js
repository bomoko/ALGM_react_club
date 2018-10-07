import React from 'react';
import { connect } from 'react-redux';
import { fetchTodos, toggleTodo } from '../actions';
import Todo from './Todo';

class TodoList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchTodos());
    console.log(this);
  }

  render() {

    const { isFetching, localTodos, fetchedTodos } = this.props;

    if (isFetching) {
      console.log('Loading');
    }

    const combinedTodos = fetchedTodos.concat(localTodos);

    const checkTodo = (todoID) => {
      this.props.dispatch(toggleTodo(todoID));
    }

    return (
      <ul>
        {combinedTodos.map(todo => {
          // Map through all todos and pass in the id as key, all the properties
          // of each todo using spread operator (e.g. text and completed), and
          // also call the toogleTodo function with the todo id.
          return (
            <Todo
              key={todo.id}
              {...todo}
              onClick={() => checkTodo(todo.id)}
            />
          )
        })}

      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    fetchedTodos: state.fetchTodos.todos,
    localTodos: state.todosReducer,
    loading: state.fetchTodos.isFetching
  }
};

export default connect(mapStateToProps)(TodoList);
