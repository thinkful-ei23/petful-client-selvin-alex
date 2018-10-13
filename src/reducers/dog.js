//import * as actions from '../actions';

const initialState = {
  data: null,
  error: null,
  loading: false
};
export const dogReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DOG_REQUEST':
      return Object.assign({}, state, {
        loading: true
      });
    case 'FETCH_DOG_SUCCESS':
    console.log('fetchDogSuccess: ', action.data);
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
