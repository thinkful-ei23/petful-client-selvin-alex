
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

export const fetchDog = () => dispatch => {
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
  fetch('localhost:8080/api/dog', {
    method: 'DELETE'
  })
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