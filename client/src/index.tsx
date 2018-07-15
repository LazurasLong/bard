import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import client from './client';
import { ApolloProvider } from "react-apollo";

import { WelcomeContainer } from './containers/Welcome';
import CreateUser from './containers/CreateUser';
import AdventureContainer from './containers/Adventures';

import 'normalize.css';
import './index.css';

ReactDOM.render((
  <Router>
    <ApolloProvider client={client}>
      <main>
        <Route exact path="/" component={WelcomeContainer}/>
        <Route path="/create-user" component={CreateUser} />
        <Route path="/adventures" component={AdventureContainer} />
      </main>
    </ApolloProvider>
  </Router>
),
  document.getElementById('root') as HTMLElement
)