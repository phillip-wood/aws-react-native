import { API } from 'aws-amplify'

import * as queries from '../src/graphql/queries'

export const SET_SNEAKERS = 'SET_SNEAKERS'
export const SET_SEARCH = 'SET_SEARCH'

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

export function fetchSneakers () {
  return dispatch => {
    return API.graphql({ query: queries.listSneakers})
      .then(sneakers => {
        dispatch(setSneakers(sneakers.data.listSneakers.items))
        return null
      })
  }
}
