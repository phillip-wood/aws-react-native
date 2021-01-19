import React, { useState, useEffect } from 'react'
import { ActivityIndicator, View } from 'react-native'
import Amplify, { Auth } from 'aws-amplify'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import awsconfig from './src/aws-exports'
Amplify.configure(awsconfig)

import Login from './app/screens/auth/Login'
import Register from './app/screens/auth/Register'
import ConfirmSignUp from './app/screens/auth/ConfirmSignUp'
import Home from './app/screens/search/Home'

const AuthenticationStack = createStackNavigator()
const AppStack = createStackNavigator()

const AuthenticationNavigator = props => {
  return (
    <AuthenticationStack.Navigator headerMode="none">
      <AuthenticationStack.Screen name="Login">
        {screenProps => (
          <Login {...screenProps} updateAuthState={props.updateAuthState} />
        )}
      </AuthenticationStack.Screen>
      <AuthenticationStack.Screen name="Register" component={Register} />
      <AuthenticationStack.Screen
        name="ConfirmSignUp"
        component={ConfirmSignUp}
      />
    </AuthenticationStack.Navigator>
  )
}

const AppNavigator = props => {
  return (
    <AppStack.Navigator headerMode="none">
      <AppStack.Screen name="Home">
        {screenProps => (
          <Home {...screenProps} updateAuthState={props.updateAuthState} />
        )}
      </AppStack.Screen>
    </AppStack.Navigator>
  )
}

const Initializing = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" color="tomato" />
    </View>
    )
}




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
          <AuthenticationNavigator updateAuthState={updateAuthState} />
        )}
      </NavigationContainer>
    )
}


export default App