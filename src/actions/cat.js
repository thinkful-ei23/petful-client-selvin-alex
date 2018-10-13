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
  fetch('http://localhost:8080/api/cat')
  .then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  }).then(data=> {
    dispatch(fetchCatSuccess(data));
  })
  .catch(err => {
    dispatch(fetchCatFailure(err));
  });
};

export const adoptCat = () => dispatch => {
  dispatch(adoptCatRequest());
  fetch('http://localhost:8080/api/cat', {
    method: 'DELETE'
  })
  .then(dispatch(fetchCat()))
  .catch(err => {
    dispatch(adoptCatFailure(err));
  });
};