import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], actions) {
  switch(actions.type) {

      case types.LOAD_COURSES_SUCCESS:
        return actions.courses;

    // case 'CREATE_COURSE':
    //   return [...state,
    //     Object.assign({}, actions.course)
    //     ];

      default:
      return state;
  }
}
