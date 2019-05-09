const API_URL = process.env.REACT_APP_API_URL;

const setNarratives = narratives => {
  return {
    type: 'GET_NARRATIVES_SUCCESS',
    narratives
  }
}


export const getNarratives = () => {
  return dispatch => {
    return fetch(`${API_URL}/narratives`)
    .then(response => response.json())
    .then(narratives => dispatch(setNarratives(narratives)))
    .catch(error => console.log(error))
  }
}

export const createNarrative = narrative => {
  return dispatch  => {
    return fetch(`${API_URL}/narratives`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({narrative: narrative})
    })
    .then(response => response.json())
    .then(narrative => console.log(narrative))
    .catch(error => console.log(error))
  }
}
