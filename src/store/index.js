import { createStore, combineReducers } from 'redux';

import login from './ducks/login';
import myThemes from './ducks/myThemes';
import myTopics from './ducks/myTopics';
import myReferences from './ducks/myReferences';

const reducers = combineReducers({
  login,
  myThemes,
  myTopics,
  myReferences
});

const store = createStore(reducers);

export default store;
