import actions from '../actions';

const initialState = {
  data: null,
  error: null,
  loading: false
};
export const catReducer = (state = initialState, action) => {
  switch (actions.type) {
    case 'FETCH_CAT_REQUEST':
      return Object.assign({}, state, {
        loading: true
      });
    case 'FETCH_CAT_SUCCESS':
      return Object.assign({}, state, {
        data: action.data,
        loading: false
      });
    case 'FETCH_CAT_FAILURE':
      return Object.assign({}, state, {
        error: action.err,
        loading: false
      });
    case 'ADOPT_CAT_REQUEST':
      return Object.assign({}, state, {
        loading: true
      });
    case 'ADOPT_CAT_FAILURE':
      return Object.assign({}, state, {
        error: action.err,
        loading: false
      });
    default:
      return state;
  }
}