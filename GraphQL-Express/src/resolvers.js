// import LRU from 'lru-cache'

const todos = [
  {
    id: 1,
    text: 'Install create-react-app',
    checked: true,
  }, {
    id: 2,
    text: 'Add List',
    checked: true,
  }, {
    id: 3,
    text: 'Add ListItem',
    checked: true,
  }
];

let nextId = 4;

// const cache = LRU({ max: 50, maxAge: 1000 * 60 * 60 })

export const resolvers = {
  Query: {
    todos: () => {
      return todos;
    },
    todo: (root, { id }) => {
      return todos.find(todo => todo.id == id);
    },
  },
  Mutation: {
    createTodoMutation: (root, args) => {
      const todo = {
        id: nextId++,
        text: args.text,
        checked: false
      };
      todos.push(todo);
      return todo;
    },
    doCheckboxMutation: (root, args) => {
      const todo = { ...args };
      console.log(todo);
      // I'm guessing the update needs to happen here.
      return todo;
    }
  }
};
