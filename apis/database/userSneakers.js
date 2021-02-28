import { API, graphqlOperation } from "aws-amplify"

import { setUserSneakers } from '../../actions/index'
import * as mutations from '../../src/graphql/mutations'
import * as queries from "../../src/graphql/queries"

//-----CREATE-----//
export function dbCreateUserSneaker( user_id, condition, awsImageLinksArray, userSneakerSneakerId ) {
    const userSneakerDetails = {
        user_id: user_id,
        condition: condition,
        images: awsImageLinksArray,
        Sneaker: userSneakerSneakerId
    }
 
    return API
        .graphql( graphqlOperation( mutations.createUserSneaker, { input: userSneakerDetails }))
        .then( result => console.log( result ))
        .catch( error => console.log('❌ Error Adding User Sneaker ', error) )  
}

//-----READ-----//
export function dbReadUserSneakers ( user_id ) {
    return dispatch => {
        return API
            .graphql( graphqlOperation( queries.getUserSneakersByUserId, { id: user_id }))
            .then( userSneakers => { 
                dispatch( setUserSneakers( userSneakers.data.getUserSneakersByUserId ))
                return null
            })
            .catch( err => console.log( err ))
    }
}

//-----UPDATE-----//
//-----DELETE-----//