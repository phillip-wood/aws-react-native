import { API } from 'aws-amplify'
import { Auth } from 'aws-amplify'

import * as queries from '../src/graphql/queries'

export const SET_SNEAKERS = 'SET_SNEAKERS'
export const SET_SEARCH = 'SET_SEARCH'
export const SET_USER = 'SET_USER'
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

export function updateUser (userDetails) {
  return {
    type: UPDATE_USER,
    userDetails
  }
}


export function fetchSneakers () {
  return dispatch => {
    return API.graphql({ query: queries.listSneakers })
      .then(sneakers => {
        dispatch(setSneakers(sneakers.data.listSneakers.items))
          return null
      })
  }
}

export function fetchAuthUser () {
  return dispatch => {
    return Auth.currentAuthenticatedUser({ bypassCache: false })
      .then(user => {
        dispatch(setUser({id:user.attributes.sub, email: user.attributes.email, username: user.attributes.preferred_username, picture: user.attributes.picture}))
          return null
    })
  }
}