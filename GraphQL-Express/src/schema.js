import {
  makeExecutableSchema,
} from 'graphql-tools';

import { resolvers } from './resolvers';

const typeDefs = `
    type Todo {
      id: String                # "!" denotes a required field
      text: String
      checked: Boolean
    }

    # This type specifies the entry points into our API. In this case
    # there is only one - "todos" - which returns a list of todos.
    type Query {
      todos: [Todo]    # "[]" means this is a list of todos
      todo(id: ID): Todo
    }

    # The mutation root type, used to define all mutations.
    type Mutation {
      # A mutation to add a new todo to the list of todos
      createTodoMutation(text: String!): Todo
      doCheckboxMutation(id: ID!, text: String!, checked: Boolean): Todo
    }
    `;

const schema = makeExecutableSchema({ typeDefs, resolvers });
export { schema };
