import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import Login from '../../screens/auth/Login'
import Register from '../../screens/auth/Register'
import ConfirmSignUp from '../../screens/auth/ConfirmSignUp'

const Stack = createStackNavigator()

const AuthNavigator = ({ updateAuthState }) => {

    return (
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Login">
          {screenProps => (
            <Login {...screenProps} updateAuthState={updateAuthState} />
          )}
        </Stack.Screen>
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen
          name="ConfirmSignUp"
          component={ConfirmSignUp}
        />
      </Stack.Navigator>
    )
  }

export default AuthNavigator
