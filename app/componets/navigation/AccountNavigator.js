import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import Profile from "../../screens/account/Profile"
import EditProfile from "../../screens/account/EditProfile"
import Messages from "../../screens/account/Messages"

const Stack = createStackNavigator()

const AccountNavigator = (props) => (
  
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen 
            name="Profile">
            {screenProps => (
            <Profile {...screenProps} updateAuthState={props.updateAuthState} />
          )}
    </Stack.Screen>
    <Stack.Screen 
            name="EditProfile">
            {screenProps => (
            <EditProfile {...screenProps} updateAuthState={props.updateAuthState} />
          )}
    </Stack.Screen>
    <Stack.Screen 
            name="Messages">
            {screenProps => (
            <Messages {...screenProps} updateAuthState={props.updateAuthState} />
          )}
    </Stack.Screen>
  </Stack.Navigator>
)

export default AccountNavigator