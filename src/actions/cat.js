import {API_BASE_URL} from '../config';

export const FETCH_CAT_REQUEST = 'FETCH_CAT_REQUEST';
export const fetchCatRequest = () => ({
  type: FETCH_CAT_REQUEST
});

export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS';
export const fetchCatSuccess = data => ({
  type: FETCH_CAT_SUCCESS,
  data
});

export const FETCH_CAT_FAILURE = 'FETCH_CAT_FAILURE';
export const fetchCatFailure = err => ({
  type: FETCH_CAT_FAILURE,
  err
});

export const ADOPT_CAT_REQUEST = 'ADOPT_CAT_REQUEST';
export const adoptCatRequest = () => ({
  type: ADOPT_CAT_REQUEST
});

export const ADOPT_CAT_FAILURE = 'ADOPT_CAT_FAILURE';
export const adoptCatFailure = err => ({
  type: ADOPT_CAT_FAILURE,
  err
});

export const fetchCat = () => dispatch => {
  dispatch(fetchCatRequest())
  fetch(`${API_BASE_URL}/api/cat`)
  .then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  }).then(data=> {
    console.log('cat data: ', data);
    dispatch(fetchCatSuccess(data));
  })
  .catch(err => {
    dispatch(fetchCatFailure(err));
  });
};

export const adoptCat = () => dispatch => {
  dispatch(adoptCatRequest());
  fetch(`${API_BASE_URL}/api/cat`, {
    method: 'DELETE'
  })
  .then(res => {
    if(!res.ok) {
      return Promise.reject(res.statusText);
    }
    dispatch(fetchCat());
  })
  .catch(err => {
    dispatch(adoptCatFailure(err));
  });
};