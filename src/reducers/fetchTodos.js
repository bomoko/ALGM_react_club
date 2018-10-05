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
        todos: action.todos
      }
    default:
      return state
  }
}

export default fetchTodos;
