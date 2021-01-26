import { combineReducers } from 'redux'

import sneakers from './sneakers'
import search from './search'

export default combineReducers({
  sneakers,
  search
})