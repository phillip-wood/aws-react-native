import { combineReducers } from 'redux'

import authUser from './authUser'
import sneakers from './sneakers'
import userSneakers from './userSneakers'
import userSearch from './userSearch'
import userInfo from './userInfo'
import userConversations from './userConversations'

export default combineReducers({
  authUser,
  sneakers,
  userSneakers,
  userSearch,
  userInfo,
  userConversations
})