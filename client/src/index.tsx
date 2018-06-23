import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import App from './containers/App';
import { Provider } from 'react-redux';
import { username } from './reducers/index';
import { StoreState } from './types/index';
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';

const logger = createLogger();

const store = createStore(
  username,
  applyMiddleware(logger)
);

ReactDOM.render((
  <Router>
    <Provider store={store}>
      <Route exact path="/" component={App}/>
    </Provider>
  </Router>
),
  document.getElementById('root') as HTMLElement
)