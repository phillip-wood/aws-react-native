import { getSneakers } from '../apis/sneakers'

export const SET_SNEAKERS = 'SET_SNEAKERS'

export function setSneakers (sneakers) {
  return {
    type: SET_SNEAKERS,
    sneakers
  }
}

export function fetchSneakers () {
  return dispatch => {
    return getSneakers()
      .then(sneakers => {
        dispatch(setSneakers(sneakers.data.results))
        return null
      })
  }
}
