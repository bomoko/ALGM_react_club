import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import rootReducer from './reducers';

// We can set initial state and pass it straight into the createStore method.
const initialState = {};

// The store will hold the complete state of the whole app in a tree-like
// architecture.

// The store is the only place where state can be changed and this is
// managed completely through dispatching actions.
// The first param passes in the root reducer.
// The second param is used for the Redux Chrome app.

// Redux gives us immutability of our state as we never actually directly
// change the applications state. What happens instead, is a copy of the change
// is made and saved as a snapshot in time. This copy gets sent eventually to
// the store through the reducers defined here for updating. By adding in Redux
// Dev tools for Chrome we can see the entire history/log of the applications
// state and when it changes.
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
