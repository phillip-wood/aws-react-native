import { combineReducers } from 'redux'

import sneakers from './sneakers'
import search from './search'
import user from './user'

export default combineReducers({
  sneakers,
  search,
  user
})