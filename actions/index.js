import { API } from 'aws-amplify'
import { Auth } from 'aws-amplify'

import * as queries from '../src/graphql/queries'

export const SET_SNEAKERS = 'SET_SNEAKERS'
export const SET_SEARCH = 'SET_SEARCH'
export const SET_USER = 'SET_USER'
export const SET_USER_SENAKERS = 'SET_USER_SNEAKERS'
export const UPDATE_USER = 'UPDATE_USER'

export function setSneakers (sneakers) {
  return {
    type: SET_SNEAKERS,
    sneakers
  }
}

export function setSearch (search) {
  return {
    type: SET_SEARCH,
    search
  }
}

export function setUser (user) {
  return {
    type: SET_USER,
    user
  }
}

export function setUserSneakers (userSneakers) {
  return {
    type: SET_USER_SENAKERS,
    userSneakers
  }
}

export function updateUser (update) {
  return {
    type: UPDATE_USER,
    update
  }
}

export function fetchAuthUser () {
  return dispatch => {
    return Auth.currentAuthenticatedUser({ bypassCache: false })
      .then(user => {
        dispatch( setUser({
          id:user.attributes.sub, 
          email: user.attributes.email, 
          username: user.attributes.preferred_username, 
          picture: user.attributes.picture
        }))
          return null
    })
    .catch( err => console.log(err))
  }
}

export function fetchSneakers () {
  return dispatch => {
    return API.graphql({ query: queries.listSneakers })
      .then(sneakers => {
        dispatch( setSneakers( sneakers.data.listSneakers.items ))
          return null
      })
      .catch( err => console.log(err))
  }
}

export function fetchUserSneakers (userId) {
  const filter = { user_id: { eq:userId }}
  return dispatch => {
    return API.graphql({ query: queries.listUserSneakers })
      .then(userSneakers => { console.log(userSneakers)
          return null
      })
      .catch( err => console.log(err))
  }
}

// dispatch( setUserSneakers(userSneakers.data.listUserSneakers.items ))
// , variables: { filter:filter }