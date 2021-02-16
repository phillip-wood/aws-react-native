import { API, graphqlOperation } from "aws-amplify"

import { setUserConversations } from '../../actions/index'
import * as queries from "../../src/graphql/queries"

//-----CREATE-----//
export function dbCreateConversation( subject, user_ids ) {
    const conversationDetails = {
        subject: subject,
        user_ids: user_ids,
        Messages: []
    }
 
    return API
        .graphql( graphqlOperation( mutations.dbCreateConversation, { input: conversationDetails }))
        .then( result => console.log( result ))
        .catch( error => console.log('❌ Error Adding Conversation ', error ))  
}

//-----READ-----//
export function dbReadUserConversations ( user_id ) {
    const filter = {user_ids: {contains: user_id}}
    return dispatch => {
        return API
            .graphql( { query: queries.listConversations, variables: { filter: filter }})
            .then( conversations => {
                dispatch( setUserConversations( conversations.data.listConversations.items ))
                return null
            })
            .catch( err => console.log( err ))
    }
}

//-----UPDATE-----//
export function dbUpdateConversation ( Messages ) {
    const conversationDetails = {
        Messages: Messages
    }

    return dispatch => {
        return API
            .graphql( graphqlOperation( mutations.updateConversation, { input: conversationDetails }))
            .then( conversation => {
                console.log( conversation )
                return null
            })
            .catch( err => console.log( err ))
    }
}

//-----DELETE-----//