import { SET_USER_INFO, UPDATE_USER_INFO_IMAGE } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_INFO:
      return action.userInfo
    case UPDATE_USER_INFO_IMAGE:
        let newState = {...state}
        newState.image = action.image
      return newState
    default:
      return state
  }
}
export default reducer