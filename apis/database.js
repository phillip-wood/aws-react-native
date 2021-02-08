import { DataStore } from '@aws-amplify/datastore'

import { UserSneaker } from '../src/models'

export async function dbCreateUserSneaker({ user_id, condition, images, sneaker_id }) {
   
    await DataStore.save(
    new UserSneaker({
        "user_id": user_id,
        "userSneakerSneakerId": sneaker_id,
        "condition": condition,
        "images": images
    })
    )
    .then( result => console.log( result ))
    .catch( error => console.log('❌ Error Adding User Sneaker ', error) )  
}




