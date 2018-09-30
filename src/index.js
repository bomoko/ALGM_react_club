import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import rootReducer from './reducers';

// We can set initial state and pass it straight into the createStore method.
const initialState = {
  todosReducer: [
    {id:1, text:'This is a todo', completed: false},
    {id:2, text:'This is another todo', completed: false}
  ]
};

// The store will hold the complete state of the whole app in tree-like
// archititecture.

// The store is the only place where state can be changed and this is
// managed through by dispatching actions.
// The first param passes in the root reducer.
// The second param is used for the Redux Chrome app.

// Redux gives us immutability of our state as we never actually directly
// change the applications state. We can see instead, a copy of the change made
// and saved as a snapshot in time. By adding in Redux Dev tools for Chrome we
// can see the entire history/log of the applications state and when it changes.
const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
