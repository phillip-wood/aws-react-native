import { SET_USER , UPDATE_USER } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return action.user
    case UPDATE_USER:
      let newState = {...state}
      newState.username = action.update
    return newState
    default:
      return state
  }
}
export default reducer