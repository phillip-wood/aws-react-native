import { Auth } from 'aws-amplify'
import { setAuthUser, updateUserName } from '../actions/index'
import { dbCreateUserInfo } from './database/userInfo'

//-----CREATE-----//
export function createAuthUser( username, password, preferred_username, navigation ) {
    Auth.signUp({ username, password, attributes: { preferred_username } })
        .then( res => dbCreateUserInfo( res.userSub, "https://sneakedbucket212939-staging.s3-ap-southeast-2.amazonaws.com/default-picture.png" ))
        .then( navigation.navigate( 'ConfirmSignUp' ))
        .catch( err => console.log( '❌ Error Signing Up' , err ))
}

export async function confirmAuthUser( username, authCode, navigation ) {
    await Auth.confirmSignUp(username, authCode)
        .then( console.log( '✅ Code confirmed' ))
        .then( navigation.navigate( 'Login' ))
        .catch( err => alert( err.message ))
}

//-----READ-----//
export function readAuthUser () {
    return dispatch => {
        return Auth
            .currentAuthenticatedUser({ bypassCache: false })
            .then(user => { dispatch( setAuthUser({
                id:user.attributes.sub, 
                email: user.attributes.email, 
                username: user.attributes.preferred_username
                }))
            return null
            })
            .catch( err => console.log(err))
        }
}

//-----UPDATE-----//
export function updatePreferred_username( payload ) { 
    return dispatch => {
        return Auth
            .currentAuthenticatedUser()
            .then( user => { return Auth.updateUserAttributes( user, { "preferred_username": payload })}) 
            .then( response => alert( response ))
            .then( dispatch( updateUserName( payload )))
            .catch( err => alert( err.message ))
    }
}

export function updatePassword( oldPassword, newPassword ) { 
    Auth.currentAuthenticatedUser()
        .then( user => { return Auth.changePassword( user, oldPassword, newPassword ) 
        })
        .then( response => alert( response )) 
        .catch( err => alert( err.message ))
}
