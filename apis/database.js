import { API, graphqlOperation } from "aws-amplify"

import { setSneakers, setUserInfo, setUserSneakers } from '../actions/index'
import * as mutations from '../src/graphql/mutations'
import * as queries from "../src/graphql/queries"

//-----CREATE-----//
export function dbCreateSneaker( brand, model, submodel, colorway ) {
    const sneakerDetails = {
        brand: brand,
        model: model,
        submodel: submodel,
        colorway: colorway
    }
 
    return API
        .graphql( graphqlOperation( mutations.createSneaker, { input: sneakerDetails }))
        .then( result => console.log( result ))
        .catch( error => console.log('❌ Error Adding User Sneaker ', error ))  
}

export function dbCreateUserSneaker( user_id, condition, awsImageLinksArray, userSneakerSneakerId ) {
    const userSneakerDetails = {
        user_id: user_id,
        condition: condition,
        images: awsImageLinksArray,
        userSneakerSneakerId: userSneakerSneakerId
    }
 
    return API
        .graphql( graphqlOperation( mutations.createUserSneaker, { input: userSneakerDetails }))
        .then( result => console.log( result ))
        .catch( error => console.log('❌ Error Adding User Sneaker ', error) )  
}

export function dbCreateUserInfo( user_id, image ) {
    const userInfoDetails = {
        user_id: user_id,
        image: image,
    }
 
    return API
        .graphql( graphqlOperation( mutations.createUserInfo, { input: userInfoDetails }))
        .then( result => console.log( result ))
        .catch( error => console.log('❌ Error Adding User Info ', error ))  
}


//-----READ-----//
export function dbReadSneakers () {
    return dispatch => {
        return API
        .graphql( graphqlOperation( queries.listSneakers ))
        .then( sneakers => { 
            dispatch( setSneakers( sneakers.data.listSneakers.items ))
            return null
        })
        .catch( err => console.log( err ))
    }
}
  
export function dbReadUserSneakers ( user_id ) {
    const filter = { user_id: { eq:user_id }}
    return dispatch => {
        return API
            .graphql( { query: queries.listUserSneakers, variables: { filter: filter }})
            .then( userSneakers => { 
                dispatch( setUserSneakers( userSneakers.data.listUserSneakers.items ))
                return null
            })
            .catch( err => console.log( err ))
    }
}

export function dbReadUserInfo ( user_id ) {
    const filter = { user_id: { eq:user_id }}
    return dispatch => {
        return API
            .graphql( { query: queries.listUserInfos, variables: { filter: filter }})
            .then( userInfo => {
                dispatch( setUserInfo( userInfo.data.listUserInfos.items[0] ))
                return null
            })
            .catch( err => console.log( err ))
    }
}

//-----UPDATE-----//
