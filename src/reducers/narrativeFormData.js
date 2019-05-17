const initialState = {
  title: '',
  tagline: '',
  story: '',
  trauma: '',
}

export default(state = initialState, action ) => {
   switch(action.type) {
     case 'UPDATED_DATA':
      return action.narrativeFormData

     case 'RESET_NARRATIVE_FORM':
      return initialState;

      default: return state;
   }
}
