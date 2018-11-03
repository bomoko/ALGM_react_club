import gql from 'graphql-tag';

const CREATE_TODO_MUTATION = gql`
  mutation CreateTodoMutation($text: String!) {
    createTodoMutation(text: $text) {
      id
      text
      checked
    }
  }
`;

const DO_CHECKBOX_MUTATION = gql`
  mutation doCheckboxMutation($id: ID!, $checked: Boolean!, $text: String!) {
    doCheckboxMutation(id: $id, text: $text, checked: $checked) {
      id
      text
      checked
    }
  }
`;

export { CREATE_TODO_MUTATION, DO_CHECKBOX_MUTATION };
