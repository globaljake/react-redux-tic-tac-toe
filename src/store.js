import { applyMiddleware, compose, createStore } from 'redux';
import logger from 'redux-logger';
import reducer from './reducer';

const createStoreWithMiddleware = compose(applyMiddleware(logger))(createStore);


export default function configureStore(initialState = {}) {
  return createStoreWithMiddleware(reducer, initialState);
}
