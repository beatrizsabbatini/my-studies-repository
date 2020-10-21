import { createStore, combineReducers } from 'redux';

import login from './ducks/login';
import myThemes from './ducks/myThemes';

const reducers = combineReducers({
  login,
  myThemes
});

const store = createStore(reducers);

export default store;
