import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';

import rootReducer from './reducers/index.js';

const configureStore = preloadedState => {
  const middleWares = [thunk];
  const middleWareEnhancer = applyMiddleware(...middleWares);

  const storeEnhancers = [middleWareEnhancer];

  const composedEnhancer = composeWithDevTools(...storeEnhancers);

  return createStore(rootReducer, preloadedState, composedEnhancer);
};

export default configureStore;
