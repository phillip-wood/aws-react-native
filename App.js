import React, { useState, useEffect } from 'react'
import Amplify, { Auth } from 'aws-amplify'
import { NavigationContainer } from '@react-navigation/native'

import awsconfig from './src/aws-exports'
Amplify.configure(awsconfig)

import AuthNavigator from './app/componets/navigation/AuthNavigator'
import AppNavigator from './app/componets/navigation/AppNavigator'
import Initializing from './app/componets/navigation/Initializing'

function App() {
  const [isUserLoggedIn, setUserLoggedIn] = useState('initializing')

  useEffect(() => {
    checkAuthState()
  }, [])
  
  async function checkAuthState() {
    try {
      await Auth.currentAuthenticatedUser()
      console.log('✅ User is signed in')
      setUserLoggedIn('loggedIn')
    } catch (err) {
      console.log('❌ User is not signed in')
      setUserLoggedIn('loggedOut')
    }
  }
  function updateAuthState(isUserLoggedIn) {
    setUserLoggedIn(isUserLoggedIn)
  }

return (
    <NavigationContainer>
      {isUserLoggedIn === 'initializing' && <Initializing />}
        {isUserLoggedIn === 'loggedIn' && (
          <AppNavigator updateAuthState={updateAuthState} />
        )}
        {isUserLoggedIn === 'loggedOut' && (
          <AuthNavigator updateAuthState={updateAuthState} />
        )}
    </NavigationContainer>
  )
}

export default App