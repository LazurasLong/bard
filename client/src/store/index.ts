import { username } from './reducers';
import { compose, applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';

const logger = createLogger();
const middlewares = [logger];

const enhancers = composeWithDevTools(
  applyMiddleware(...middlewares),
);

export default createStore(
  username,
  enhancers
);