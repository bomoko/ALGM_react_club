import React from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';

const TodoInput = ({ value, onChange}) => (
  <label>
    <input type="text"
      value={value}
      placeholder="Get this done"
      onChange={onChange}
    />
  </label>
);

export default TodoInput;

// See https://github.com/kimobrian/GraphQL-React-Apollo/blob/develop/src/app/components/CreateChannel/CreateChannel.jsx
// const CreateTodoMutation = gql`
//   mutation addTodo($name: String!) {
//     addTodo(name: $name) {
//       id
//       name
//       checked
//     }
//   }
// `;

// const CreateTodoWithMutation = graphql(
//   CreateTodoMutation
// )(CreateTodo);

// export default CreateTodoWithMutation;
