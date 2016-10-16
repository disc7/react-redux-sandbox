import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi'; // When we change to the real API just change to point at the real API

export function loadCoursesSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses } ; // In ES6 cause the course object name:value match only need to define 1 value for left and right
}

function createCourse(course) {
  return { type: 'CREATE_COURSE', course};
}

export function loadCourses() {
  return function(dispatch) {
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw(error);
    });
  };
}
