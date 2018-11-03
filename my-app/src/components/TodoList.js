// https://codesandbox.io/s/v3mn68xxvy

import React from 'react';
import { Query } from 'react-apollo';
import TODO_LIST_QUERY from './Queries';
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';

const TodoList = () => (
  // Render prop
  <Query query={TODO_LIST_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      let input;

      return (
        <div>
          <form>
            <ul>
              {data.todos.map(
                (item, index) => (
                  <TodoItem
                    key={index}
                    text={item.text}
                    checked={item.checked}
                    id={item.id}
                  />
                )
              )}
            </ul>
          </form>

          <TodoInput inValue={input} />
        </div>
      );
      //});
    }}
  </Query>
);

export default TodoList;
