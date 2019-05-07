
const API_URL = process.env.REACT_APP_API_URL;

const getDisorders = () => {
  dispatch => {
    return fetch(`${API_URL}/disorders`)
    .then(response => response.json())
    .then(disorders => dispatch(setDisorders))
    .catch(error => console.log(error))
  }
}
