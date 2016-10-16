import {combineReducers} from 'redux';
import courses from './courseReducer';  // As the courseReducer function is exporting as default can call the alias something other than courseReducer
import authors from './authorReducer';

// using ES6 'short hand property names' courses instead of courses:courses
const rootReducer = combineReducers({
  courses,
  authors
});

export default rootReducer;
