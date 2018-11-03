import React from 'react';
import TODO_LIST_QUERY from './Queries';
import { CREATE_TODO_MUTATION } from './Mutations';
import { Mutation } from 'react-apollo';

const TodoInput = () => {

  let input;

  return (
    <Mutation
      mutation={CREATE_TODO_MUTATION}
      update={(cache, { data: { createTodoMutation }}) => {
        const { todos } = cache.readQuery({ query: TODO_LIST_QUERY });
        cache.writeQuery({
          query: TODO_LIST_QUERY,
          data: {todos: todos.concat([createTodoMutation])}
        });
      }}
    >
      {(createTodoMutation, { loading, error }) => (
        <div>
          <form
            onSubmit={e => {
              e.preventDefault();
              createTodoMutation({
                variables: { text: input.value }
              });
              input.value = '';
            }}
          >

            <input type="text"
              placeholder="Get this done"
              ref={ node => {
                input = node;
              }}
            />
            <button type="submit">Add Todo</button>
          </form>
          {loading && <p>Loading Add Todo...</p>}
          {error && <p>Error WITH TODO :( Please try again</p>}
        </div>
      )}
    </Mutation>
  );
};

export default TodoInput;
