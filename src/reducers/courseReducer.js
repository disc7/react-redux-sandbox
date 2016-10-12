export default function courseReducer(state = [], actions) {
  switch(actions.type) {
    case 'CREATE_COURSE':
      debugger;
      return [...state,
        Object.assign({}, actions.course)
        ];

      default:
      return state;
  }
}
