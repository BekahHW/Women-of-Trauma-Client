export default (state= [], action) => {
  switch(action.type) {
    case 'GET_NARRATIVES_SUCCESS':
      return action.narratives;

    case 'CREATE_NARRATIVE_SUCCESS':
      return state.concat(action.narrative);

      default: return state;
  }
}
