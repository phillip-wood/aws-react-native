import { Auth } from 'aws-amplify'
import { updateUser } from '../actions/index'

//used by Register screen
export function authSignUp( username, password, preferred_username, picture, navigation ) {
  Auth.signUp({ username, password, attributes: { preferred_username, picture } })
    .then( navigation.navigate( 'ConfirmSignUp' ))
    .catch( err => console.log( '❌ Error Signing Up' , err ))
}

//used by UserDetails screen
export function updatePreferred_username( payload, dispatch, navigation ) { 
  Auth.currentAuthenticatedUser()
    .then( user => { return Auth.updateUserAttributes( user, { "preferred_username": payload })}) 
    .then( response => alert( response ))
    .then( dispatch( updateUser( payload )))
    .catch( err => alert( err.message ))
}

//used by UserDetails screen
export function updatePassword( oldPassword, newPassword ) { 
  Auth.currentAuthenticatedUser()
    .then( user => { return Auth.changePassword( user, oldPassword, newPassword ) })
    .then( response => alert( response )) 
    .catch( err => alert( err.message ))
}
