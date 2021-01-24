import { SET_SNEAKERS } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SNEAKERS:
      return action.sneakers
    default:
      return state
  }
}

export default reducer