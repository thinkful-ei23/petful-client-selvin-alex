import {API_BASE_URL} from '../config';

export const FETCH_DOG_REQUEST = 'FETCH_DOG_REQUEST';
export const fetchDogRequest = () => ({
  type: FETCH_DOG_REQUEST
});

export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS';
export const fetchDogSuccess = data => ({
  type: FETCH_DOG_SUCCESS,
  data
})

export const FETCH_DOG_FAILURE = 'FETCH_DOG_FAILURE';
export const fetchDogFailure = err => ({
  type: FETCH_DOG_FAILURE,
  err
})

export const ADOPT_DOG_REQUEST = 'ADOPT_DOG_REQUEST';
export const adoptDogRequest = () => ({
  type: ADOPT_DOG_REQUEST
});

export const ADOPT_DOG_FAILURE = 'ADOPT_DOG_FAILURE';
export const adoptDogFailure = err => ({
  type: ADOPT_DOG_FAILURE,
  err
})

export const fetchDog = () => dispatch => {
  dispatch(fetchDogRequest());
  fetch(`${API_BASE_URL}/api/dog`)
  .then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  }).then(data => {
    dispatch(fetchDogSuccess(data));
  })
  .catch(err => {
    dispatch(fetchDogFailure(err));
  });
};

export const adoptDog = () => dispatch => {
  dispatch(adoptDogRequest());
  fetch(`${API_BASE_URL}/api/dog`, {
    method: 'DELETE'
  })
  .then(res => {
    if(!res.ok) {
      return Promise.reject(res.statusText);
    }
    dispatch(fetchDog());
  })
  .catch(err => {
    dispatch(adoptDogFailure(err));
  });
};