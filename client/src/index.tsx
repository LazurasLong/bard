import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import client from './client';
import { ApolloProvider } from "react-apollo";

import { WelcomeContainer } from './containers/Welcome';
import Login from './containers/Login';
import GoogleAuth from './containers/GoogleAuth';
import CreateUser from './containers/CreateUser';
import AdventureContainer from './containers/Adventures';

import 'normalize.css';
import './index.css';

ReactDOM.render((
  <ApolloProvider client={client}>
    <Router>
      <main>
        <Route exact path="/" component={WelcomeContainer} />
        <Route path="/create-user" component={CreateUser} />
        <Route path="/login" component={Login} />
        <Route path="/auth" component={GoogleAuth} />
        <Route path="/adventures" component={AdventureContainer} />
      </main>
    </Router>
  </ApolloProvider>
),
  document.getElementById('root') as HTMLElement
)