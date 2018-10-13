export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS';
export const fetchCatSuccess = catList => ({
  type: FETCH_CAT_SUCCESS,
  catList
})

export const FETCH_CAT_FAILURE = 'FETCH_CAT_FAILURE';
export const fetchCatFailure = err => ({
  type: FETCH_CAT_FAILURE,
  err
})

export const ADOPT_CAT_FAILURE = 'ADOPT_CAT_FAILURE';
export const adoptCatFailure = err => ({
  type: ADOPT_CAT_FAILURE,
  err
})
export const fetchCat = () => dispatch => {
  fetch('localhost:8080/api/cat')
  .then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  }).then(catList=> {
    dispatch(fetchCatSuccess(catList));
  })
  .catch(err => {
    dispatch(fetchCatFailure(err));
  });
};


export const adoptCat = () => dispatch => {
  fetch('localhost:8080/api/cat', {
    method: 'DELETE'
  })
  .then(dispatch(fetchCat()))
  .catch(err => {
    dispatch(adoptCatFailure(err));
  });
};