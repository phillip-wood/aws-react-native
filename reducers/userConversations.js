import { SET_USER_CONVERSATIONS } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_CONVERSATIONS:
      return action.conversations
    default:
      return state
  }
}
export default reducer