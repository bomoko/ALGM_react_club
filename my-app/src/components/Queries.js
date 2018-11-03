import gql from 'graphql-tag';

const TODO_LIST_QUERY = gql`
  query todoListQuery {
    todos {
      id
      text
      checked
    }
  }
`;

export default TODO_LIST_QUERY ;
