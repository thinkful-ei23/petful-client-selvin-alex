import actions from '../actions';

const initialState = {  
    data: null,
    error: null,
    loading: false 
}
export default const dogReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'FETCH_DOG_SUCCESS':
    return Object.assign({}, state, {
      data: action.dogList
    });
    case 'FETCH_DOG_FAILURE':
    return Object.assign({}, state, {
      error: action.err
    });
    case 'ADOPT_DOG_FAILURE':
    return Object.assign({}, state, {
      error: action.err
    });   
  }
}