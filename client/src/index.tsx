import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import App from './components/App';
import { Provider } from 'react-redux';
import { StoreState } from './types/index';
// import { createStore } from 'redux';

ReactDOM.render((
  <Router>
    <Provider>
      <Route exact path="/" component={App}/>
    </Provider>
  </Router>
),
  document.getElementById('root') as HTMLElement
)