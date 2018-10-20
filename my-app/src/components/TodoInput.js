import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const TodoInput = ({ mutate }) => {
  const handleKeyUp = (event) => {
    if (event.keyCode === 13) {
      event.persist();
      mutate({
        variables: { text: event.target.value }
      })
        .then(res => {
          event.target.value = '';
        });
    }
  };

  return (
    <input type="text"
      placeholder="Get this done"
      onKeyUp={handleKeyUp}
    />
  );
};

// export default TodoInput;

// See https://github.com/kimobrian/GraphQL-React-Apollo/blob/develop/src/app/components/CreateChannel/CreateChannel.jsx
const AddsTodoMutation = gql`
  mutation CreateTodoMutation($text: String!) {
    CreateTodoMutation(text: $text) {
      id
      text
      checked
    }
  }
`;

const CreateTodoWithMutation = graphql(
  AddsTodoMutation
)(TodoInput);

export default CreateTodoWithMutation;
