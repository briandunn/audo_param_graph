import { Map, List } from 'immutable';

export default function reducer(state, action) {
  switch(action.type) {
    case 'ADD_SEGMENT':
      return state.updateIn(
        ['segments'],
        segments => segments
          .push(Map({method: 'setValueAtTime', t: action.t, v: action.v}))
          .sortBy(segment => segment.get('t'))
      );
    case 'REPLACE_SAMPLES':
      return state.setIn(['points'], action.data);
    case 'REMOVE_SEGMENT':
      return state.updateIn(['segments'], segments => segments.delete(action.index));
    case 'CHANGE_SEGMENT':
      return state.updateIn(['segments', action.index], segment => segment.set(action.k, action.v));
    default:
      console.log(action);
      return state;
  };
};
