import uuid from 'uuid'

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      const band = {
        id: uuid(),
        name: action.name
      }
      return { ...state, bands: [...state.bands, band] }
    case 'DELETE_BAND':
      console.log(`deleting ${action.id}`)
      return {bands: state.bands.filter(band => band.id !== action.id)}
    default:
      return state
  }
}
