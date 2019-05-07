const API_URL = process.env.REACT_APP_API_URL;

const setNarratives = narratives => {
  return {
    type: 'GET_NARRATIVES_SUCCESS',
    narratives
  }
}


const getNarratives = () => {
  dispatch => {
    return fetch(`${API_URL}/narratives`)
    .then(response => response.json())
    .then(disorders => dispatch(setNarratives))
    .catch(error => console.log(error))
  }
}
