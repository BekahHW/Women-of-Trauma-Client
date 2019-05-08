export default (state= [], action) => {
  switch(action.type) {
    case 'GET_DISORDERS_SUCCESS':
      return action.disorders;

      default: return state;
  }
}
