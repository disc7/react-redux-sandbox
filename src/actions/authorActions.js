/*
    Action Creator - normally only returns an object
    Except with Redux Thunk which returns a function
*/


import AuthorApi from '../api/mockAuthorApi';
import * as types from './actionTypes';

// Known in React as Action Creator
export function loadAuthorsSuccess(authors) {
  return {type: types.LOAD_AUTHORS_SUCCESS, authors};
}

export function loadAuthors() {
  return dispatch => {
    return AuthorApi.getAllAuthors().then(authors => {
      dispatch(loadAuthorsSuccess(authors));
    }).catch(error => {
      throw(error);
    });
  };
}
