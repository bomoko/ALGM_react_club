// Todos Reducer.

// A reducer takes the current todo state and through different actions
// returns different state.
// In other words, the reducer is essentially a giant switch statement that
// allows you to gain control of what action/logic can change state.
const todosReducer = (state = [], action) => {
  // Switch through each action type.
  // Redux will wait for an action, run each action and update the state as
  // values given.
  switch (action.type) {
    // If Add Todo action...
    case 'ADD_TODO':
      return [
        // Get last known state and always return todo.
        // When the ADD_TODO action is dispatched, and this called, the internal
        // state is replaced with the ID, text and complete status every time.
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case 'TOGGLE_TODO':
    console.log(action);
    
      return state.map(todo =>
        // Ternary operator - iterate through todoes and if ids match, then
        // take current state and return todo state as not completed. Else return
        // original todo state.
        (todo.id === action.id)
          // ... property spread notation.
          // Adds all properties of todo without having to define them.
          // e.g. it is the same as todo.id, todo.text, and todo.completed.
          ? {...todo, completed: !todo.completed} : todo
      );
    default:
      return state
  }
};

export default todosReducer;
