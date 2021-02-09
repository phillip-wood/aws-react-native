import { API, graphqlOperation } from "aws-amplify"

import * as mutations from '../src/graphql/mutations'

export async function dbCreateUserSneaker({ user_id, condition, images, sneaker_id }) {
   
    const sneakerDetails = {
        user_id: user_id,
        condition: condition,
        images: images,
        userSneakerSneakerId: sneaker_id
      }
 
    await API.graphql( graphqlOperation( mutations.createUserSneaker, { input: sneakerDetails }))
    .then( result => console.log( result ))
    .catch( error => console.log('❌ Error Adding User Sneaker ', error) )  
}