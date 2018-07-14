import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import ApolloClient from 'apollo-boost';
import gql from "graphql-tag";

import { WelcomeContainer } from './containers/Welcome';
import { AdventureContainer } from './containers/Adventures';
import { Provider } from 'react-redux';
import store from './store';

import 'normalize.css';
import './index.css';

const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql'
});

client
  .query({
    query: gql`
      {
        users {
          id
        }
      }
    `
  })
  .then(result => console.log(result));

ReactDOM.render((
  <Router>
    <Provider store={store}>
      <main>
        <Route exact path="/" component={WelcomeContainer}/>
        <Route path="/adventures" component={AdventureContainer}/>
      </main>
    </Provider>
  </Router>
),
  document.getElementById('root') as HTMLElement
)