import { createStore, applyMiddleware } from 'redux';
import promise from '../../src';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const reducer = (state) => state;

// Custom error middleware should go before the promise middleware
const store = createStore(reducer, null, applyMiddleware(
  thunk,
  promise(),
  createLogger({ collapsed: true }),
));

export default store;
