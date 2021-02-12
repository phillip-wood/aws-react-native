import { SET_AUTH_USER , UPDATE_USER_USERNAME } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER:
      return action.authUser
    case UPDATE_USER_USERNAME:
      let newState = {...state}
      newState.username = action.username
    return newState
    default:
      return state
  }
}
export default reducer