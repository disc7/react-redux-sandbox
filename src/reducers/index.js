import {combineReducers} from 'redux';
import courses from './courseReducer';  // As the courseReducer function is exporting as default can call the alias something other than courseReducer

// using ES6 'short hand property names' courses instead of courses:courses
const rootReducer = combineReducers({
  courses
});

export default rootReducer;
