import { Auth } from 'aws-amplify'

//used by Register screen
export async function authSignUp( username, password, preferred_username, picture, navigation ) {
    console.log('test')
    try {
      await Auth.signUp({ username, password, attributes: { preferred_username, picture } })
      console.log('✅ Sign-up Confirmed')
      navigation.navigate('ConfirmSignUp')
    } 
    
    catch (error) {
      console.log('❌ Error signing up...', error)
    }
}

//used by UserDetails screen
export async function updateAuthUserAttributes(property, payload) {
    try {
    
        let user = await Auth.currentAuthenticatedUser();

        await Auth.updateUserAttributes(user, {
        'preferred_username': payload
        })
    }
    catch (error) {
              console.log('❌ Error Updating Details', error)
            }
}
