export default narratives = (state= [], action) => {
  switch(action.type) {
    case 'GET_NARRATIVES_SUCCESS':
      return action.narratives;

      default: return state;
  }
}
