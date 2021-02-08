import { SET_USER_SENAKERS } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_SENAKERS:
      return action.userSneakers
    // case UPDATE_USER:
    //   let newState = {...state}
    //   newState.username = action.update
    // return newState
    default:
      return state
  }
}
export default reducer