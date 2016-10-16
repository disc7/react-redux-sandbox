import * as types from '../actions/actionTypes';
import initialState from './initialState';

// Reducers take state and action and return a new state
export default function authorReducer(state = initialState.authors, action) {
  switch (action.type) {
    case types.LOAD_AUTHORS_SUCCESS:
      return action.authors;

    default:
      return state;
  }
}
