// Actions

// Actions control what data can get sent/dispatched to the store.
// They take the data given to it, assigns a type property (this is compulsory)
// and returns the new state object.
// Type is typically written in all caps and typically describes semantically
// what the action does.

// Set initial todo id.
let todoId = 0;

// Define ADD_TODO action type, update the ID by one and pass the todo text.
// TYPE: type of action.
// ID: the payload - generate a new ID so each todo is unique.
// TEXT: the text given in each todo.
export const addTodo = (text, id) => ({
  type: 'ADD_TODO',
  id: id++, // It is best practice to avoid adding too much logic here.
  text
});

// FILTER: set whether the filter is All, Completed and Todo.
export const setToggleFilters = (filter) => ({
  type: 'SET_TOGGLE_FILTER',
  filter
});

// ID: return the todo ID.
export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
});

const recieveTodos = (todos, json) => ({
  type: 'RECEIVE_TODOS',
  countTodos: Object.keys(json).length,
  todos: json.map(child => child)
});

export const updateTodos = (todos) => ({
  type: 'UPDATE_TODOS',
  todos: todos
});

// Store the types of action name filters as constants (looking).
export const ToggleActionFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_TODO: 'SHOW_TODO'
};

export const getNextTodoID = (totalTodos) => ({
  type: 'GET_NEXT_TODO_ID',
  nextID: totalTodos++
});

export const fetchTodos = (todos) => {
  return (dispatch) => {
    // Fetch data and dispatch recieveTodos if no errors
    return fetch(`http://www.mocky.io/v2/5bb782e53000006b00f93a83`)
      .then(
        response => response.json(),
        error => console.log('Error: ', error)
      )
      .then(
        json => dispatch(recieveTodos(todos, json))
      )
  }
}
