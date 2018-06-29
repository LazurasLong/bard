import reducers from './reducers';
import { compose, applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';

const logger = createLogger();
const middlewares = process.env.NODE_ENV === 'development' 
  ? [logger]
  : [];

const enhancers = composeWithDevTools(
  applyMiddleware(...middlewares),
);

export default createStore(
  reducers,
  enhancers
);