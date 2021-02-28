import { API, graphqlOperation } from "aws-amplify"

import { setUserInfo, updateUserInfoImage } from '../../actions/index'
import * as mutations from '../../src/graphql/mutations'
import * as queries from "../../src/graphql/queries"

//-----CREATE-----//
// export function dbCreateUserInfo( user_id, image ) {
//     const userInfoDetails = {
//         user_id: user_id,
//         image: image,
//         conversation_ids: []
//     }
 
//     return API
//         .graphql( graphqlOperation( mutations.createUserInfo, { input: userInfoDetails }))
//         .then( result => console.log( result ))
//         .catch( error => console.log('❌ Error Adding User Info ', error ))  
// }

//-----READ-----//
export function dbReadUserInfo ( user_id ) {
    return dispatch => {
        return API
            .graphql( graphqlOperation( queries.getUserInfoByUserId, { id: user_id }))
            .then( user => { 
                console.log( user )
                return null
            })
            .catch( err => console.log( err ))
    }
}

//-----UPDATE-----//
// export function dbUpdateUserInfo ( link, userInfo ) {
//     const newUserInfo = {
//         id: userInfo.id,
//         image: link,
//         _version: userInfo._version
//     }

//     return dispatch => {
//         return API
//             .graphql( graphqlOperation( mutations.updateUserInfo, { input: newUserInfo }))
//             .then( userInfo => {
//                 dispatch( updateUserInfoImage( userInfo.data.updateUserInfo.image ))
//                 return null
//             })
//             .catch( err => console.log( err ))
//     }
// }

//-----DELETE-----//