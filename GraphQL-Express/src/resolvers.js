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
    addTodo: (root, args) => {
      const newTodo = { id: nextId++, text: args.text, checked: false };
      todo.push(newTodo);
      return newTodo;
    },
  },
};
