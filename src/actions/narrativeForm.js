export const updateNarrativeFormData = narrativeFormData => {
  return {
    type: 'UPDATED_DATA',
    narrativeFormData
  }
}

export const resetNarrativeForm = () => {
  return {
    type: 'RESET_NARRATIVE_FORM'
  }
}
