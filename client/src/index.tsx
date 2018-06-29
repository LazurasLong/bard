import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import { WelcomeContainer } from './containers/Welcome';
import { AdventureContainer } from './containers/Adventures';
import { Provider } from 'react-redux';
import store from './store/index';

import 'normalize.css';
import './index.css';

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