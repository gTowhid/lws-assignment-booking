import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import showReducer from './show/showReducer';

const limitBook = (store) => (next) => (action) => {
  const state = store.getState();

  if (state.length > 2 && action.type === 'show/book') {
    return null;
  } else {
    return next(action);
  }
};

const store = createStore(showReducer, applyMiddleware(limitBook));

export default store;
