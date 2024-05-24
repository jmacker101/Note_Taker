// what did i do wrong for it to be crossed out?
import { createStore } from 'redux';
import rootReducer from './reducers';

// Create the Redux store with the root reducer
const store = createStore(rootReducer);

export default store;