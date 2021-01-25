import { API } from 'aws-amplify'

import * as queries from '../src/graphql/queries'

export const SET_SNEAKERS = 'SET_SNEAKERS'

export function setSneakers (sneakers) {
  return {
    type: SET_SNEAKERS,
    sneakers
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
