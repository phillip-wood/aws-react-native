import { combineReducers } from 'redux'

import authUser from './authUser'
import sneakers from './sneakers'
import userSneakers from './userSneakers'
import search from './search'
import userInfo from './userInfo'

export default combineReducers({
  authUser,
  sneakers,
  userSneakers,
  search,
  userInfo
})