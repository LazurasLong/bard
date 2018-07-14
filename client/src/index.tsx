import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from "react-apollo";

import { WelcomeContainer } from './containers/Welcome';
import AdventureContainer from './containers/Adventures';

import 'normalize.css';
import './index.css';

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql'
});

ReactDOM.render((
  <Router>
    <ApolloProvider client={client}>
      <main>
        <Route exact path="/" component={AdventureContainer}/>
        {/* <Route path="/adventures" component={AdventureContainer}/> */}
      </main>
    </ApolloProvider>
  </Router>
),
  document.getElementById('root') as HTMLElement
)