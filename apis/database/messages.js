// import { API, graphqlOperation } from "aws-amplify"

// import { setUserMessages } from '../../actions/index'
// import * as queries from "../../src/graphql/queries"

//-----CREATE-----//
// export function dbCreateMessage( body, creator_id ) {
//     const messageDetails = {
//         body: body,
//         creator_id: creator_id
//     }
 
//     return API
//         .graphql( graphqlOperation( mutations.createMessage, { input: messageDetails }))
//         .then( result => console.log( result ))
//         .catch( error => console.log('❌ Error Adding Message', error ))  
// }

//-----READ-----//
// export function dbReadUserMessages ( user_id ) {
//     const filter = { or: [ {creator_id: { eq: user_id }}, { recipient_id: { eq: user_id }} ]}
//     return dispatch => {
//         return API
//             .graphql( { query: queries.listMessages, variables: { filter: filter }})
//             .then( messages => {
//                 dispatch( setUserMessages( messages.data.listMessages.items ))
//                 return null
//             })
//             .catch( err => console.log( err ))
//     }
// }

//-----UPDATE-----//
//-----DELETE-----//