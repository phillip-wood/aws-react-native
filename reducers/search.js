import { SET_SEARCH } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH:
      return action.search
    default:
      return state
  }
}

export default reducer