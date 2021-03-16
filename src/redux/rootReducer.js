// The actual base reducer object that represents all of the state of our application. Will be the actual code that combines all state together.

import { combineReducers } from 'redux';

import userReducer from './user/userReducer';

export default combineReducers({
  user: userReducer,
});
