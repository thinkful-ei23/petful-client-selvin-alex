export const FETCH_DOG_REQUEST = 'FETCH_DOG_REQUEST';
export const fetchDogRequest = () => ({
  type: FETCH_DOG_REQUEST
});

export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS';
export const fetchDogSuccess = dogList => ({
  type: FETCH_DOG_SUCCESS,
  dogList
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
  fetch('localhost:8080/api/dog')
  .then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  }).then(dogList=> {
    dispatch(fetchDogSuccess(dogList));
  })
  .catch(err => {
    dispatch(fetchDogFailure(err));
  });
};

export const adoptDog = () => dispatch => {
  dispatch(adoptDogRequest());
  fetch('localhost:8080/api/dog', {
    method: 'DELETE'
  })
  .then(dispatch(fetchDog()))
  .catch(err => {
    dispatch(adoptDogFailure(err));
  });
};