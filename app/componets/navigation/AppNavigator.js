import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import Home from '../../screens/search/Home'

const Stack = createStackNavigator()

const AppNavigator = props => {
    
    return (
      <Stack.Navigator headerMode="none">
        <Stack.Screen 
            name="Home">
            {screenProps => (
            <Home {...screenProps} updateAuthState={props.updateAuthState} />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    )
  }

export default AppNavigator