import { legacy_createStore as createStore } from 'redux';
import showReducer from './show/showReducer';

const store = createStore(showReducer);

export default store;
