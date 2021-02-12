export const SET_SNEAKERS = 'SET_SNEAKERS'
export const SET_SEARCH = 'SET_SEARCH'
export const SET_AUTH_USER = 'SET_AUTH_USER'
export const SET_USER_INFO = 'SET_USER_INFO'
export const SET_USER_SENAKERS = 'SET_USER_SNEAKERS'
export const UPDATE_USER_USERNAME = 'UPDATE_USER_USERNAME'
export const UPDATE_USER_INFO_IMAGE  = 'UPDATE_USER_INFO_IMAGE'

export function setSneakers ( sneakers ) {
  return {
    type: SET_SNEAKERS,
    sneakers
  }
}

export function setSearch ( search ) {
  return {
    type: SET_SEARCH,
    search
  }
}

export function setAuthUser ( authUser ) {
  return {
    type: SET_AUTH_USER,
    authUser
  }
}

export function setUserInfo ( userInfo ) {
  return {
    type: SET_USER_INFO,
    userInfo
  }
}

export function setUserSneakers ( userSneakers ) {
  return {
    type: SET_USER_SENAKERS,
    userSneakers
  }
}

export function updateUserName ( username ) {
  return {
    type: UPDATE_USER_USERNAME,
    username
  }
}

export function updateUserInfoImage ( image ) {
  return {
    type: UPDATE_USER_INFO_IMAGE,
    image
  }
}