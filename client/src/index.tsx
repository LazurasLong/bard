import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import App from './components/App';

ReactDOM.render((
  <Router>
    <main>
      <Route exact path="/" component={App}/>
    </main>
  </Router>
),
  document.getElementById('root') as HTMLElement
)