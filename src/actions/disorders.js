
const API_URL = process.env.REACT_APP_API_URL;

const setDisorders = disorders => {
  return {
    type: 'GET_DISORDERS_SUCCESS',
    disorders
  }
}

export const getDisorders = () => {
  return dispatch => {
    return fetch(`${API_URL}/disorders`)
    .then(response => response.json())
    .then(disorders => dispatch(setDisorders()))
    .catch(error => console.log(error))
  }
}
