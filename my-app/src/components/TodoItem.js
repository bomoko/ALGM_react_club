// https://www.apollographql.com/docs/react/essentials/mutations.html#basic
import React from 'react';
import { DO_CHECKBOX_MUTATION } from './Mutations';
import TodoCheckBox from './TodoCheckBox';
import { Mutation } from 'react-apollo';

const TodoItem = ({ checked, text, id }) => {

  return (
    <Mutation
      mutation={DO_CHECKBOX_MUTATION}
      // This doesn't seem to help either.
      // update={(cache, { data: { doCheckboxMutation } }) => {
      //   const { todos } = cache.readQuery({ query: DO_CHECKBOX_MUTATION });
      //   cache.writeQuery({
      //     query: DO_CHECKBOX_MUTATION,
      //     data: { todos: todos.concat([doCheckboxMutation]) }
      //   });
      // }}
    >
      {(doCheckboxMutation) => (
        <li key={this.key}>
          <label>
            <TodoCheckBox
              checked={checked}
              text={text}
              onChange={e => {
                e.preventDefault();
                doCheckboxMutation({
                  variables: {
                    id,
                    text,
                    checked: !checked,
                  }
                });
              }}
            />
            {text} {id}
          </label>
        </li>
      )}
    </Mutation>
  );
};

export default TodoItem;
