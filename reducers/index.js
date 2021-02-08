import { combineReducers } from 'redux'

import user from './user'
import sneakers from './sneakers'
import userSneakers from './userSneakers'
import search from './search'

export default combineReducers({
  user,
  sneakers,
  userSneakers,
  search,
})