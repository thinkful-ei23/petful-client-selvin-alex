import actions from '../actions';

const initialState = {  
    data: null,
    error: null,
    loading: false 
}
export default const catReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'FETCH_CAT_SUCCESS':
    return Object.assign({}, state, {
      data: action.catList
    });
    case 'FETCH_CAT_FAILURE':
    return Object.assign({}, state, {
      error: action.err
    });
    case 'ADOPT_CAT_FAILURE':
    return Object.assign({}, state, {
      error: action.err
    });
   
  }
}