// Actions

// Actions control what data can get sent/dispatched to the store.
// They take the data given to it, assigns a type property (this is compulsory)
// and returns the new state object.
// Type is typically written in all caps and typically describes semantically
// what the action does.

// Set initial todo id. We need to set it to 3 as there is already 2 Todos
// passed directly into the store as initial state.
let todoId = 3;

// Define ADD_TODO action type, update the ID by one and pass the todo text.
// TYPE: type of action.
// ID: the payload - generate a new ID so each todo is unique.
// TEXT: the text given in each todo.
export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: todoId++, // It is best practice to avoid adding too much logic here.
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

// Store the types of action name filters as constants (looking).
export const ToggleActionFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_TODO: 'SHOW_TODO'
};
