import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { ApolloClient } from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {HttpLink} from 'apollo-link-http';
import {ApolloProvider} from 'react-apollo';


const client = new ApolloClient({
  link: new HttpLink({uri: 'http://localhost:7708/graphql'}),
  cache: new InMemoryCache()
});

let app = document.querySelector('#root');

render(
  <ApolloProvider client={client}>
    <div className="App">
      <App />
    </div>
  </ApolloProvider>, app)
// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
