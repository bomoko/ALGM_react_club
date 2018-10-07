const fetchTodos = (
  state = {
    isFetching: false,
    todos: []
  },
  action
) => {
  switch (action.type) {
    case "REQUEST_TODOS":
      return { ...state,
        isFetching: true
      }
    case "RECEIVE_TODOS":
      return { ...state,
        isFetching: false,
        totalTodos: action.countTodos,
        todos: action.todos
      }
    case "UPDATE_TODOS":
    console.log(state);
      return { ...state,
        todos: action.todos
      }
    default:
      return state
  }
}

export default fetchTodos;
