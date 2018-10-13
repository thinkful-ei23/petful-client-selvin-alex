import actions from '../actions';

const initialState = {
  data: null,
  error: null,
  loading: false
};
export const dogReducer = (state = initialState, action) => {
  switch (actions.type) {
    case 'FETCH_DOG_REQUEST':
      return Object.assign({}, state, {
        loading: true
      });
    case 'FETCH_DOG_SUCCESS':
    console.log('fetchDogSuccess');
      return Object.assign({}, state, {
        data: action.data,
        loading: false
      });
    case 'FETCH_DOG_FAILURE':
      return Object.assign({}, state, {
        error: action.err,
        loading: false
      });
    case 'ADOPT_DOG_REQUEST':
      return Object.assign({}, state, {
        loading: true
      });
    case 'ADOPT_DOG_FAILURE':
      return Object.assign({}, state, {
        error: action.err,
        loading: false
      });
    default:
      return state;
  }
};
