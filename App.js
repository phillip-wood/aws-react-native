import React, { useState, useEffect } from 'react'
import Amplify, { Auth } from 'aws-amplify'
import { NavigationContainer } from '@react-navigation/native'

import awsconfig from './src/aws-exports'
Amplify.configure(awsconfig)

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

import reducers from './reducers'

import AuthNavigator from './app/componets/navigation/AuthNavigator'
import TabNavigator from './app/componets/navigation/TabNavigator'
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
      {isUserLoggedIn === 'initializing' && <Initializing/>}
        {isUserLoggedIn === 'loggedIn' && (
          <Provider store={store}>
            <TabNavigator updateAuthState={updateAuthState} />
          </Provider>
        )}
        {isUserLoggedIn === 'loggedOut' && (
          <AuthNavigator updateAuthState={updateAuthState} />
        )}
    </NavigationContainer>
  )
}

export default App