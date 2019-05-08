export default(state= {
  title = '',
  tagline = '',
  story = '',
}, action) => {
   switch(action.type) => {
     case 'UPDATED_DATA':
      return narrative.narrativeFormData

      default: return state;
   }
}
