import { username } from './reducers';
import persistState from 'redux-localstorage'
import { compose, applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';

const logger = createLogger();

const enhancer = compose(
  logger,
  persistState()
);

export default createStore(
  username,
  applyMiddleware(logger)
);