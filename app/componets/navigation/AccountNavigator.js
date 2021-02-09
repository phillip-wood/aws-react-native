import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import Profile from "../../screens/account/Profile"
import EditProfile from "../../screens/account/EditProfile"
import Messages from "../../screens/account/Messages"
import Logout from "../../screens/account/Logout"

const Stack = createStackNavigator()

const AccountNavigator = ({updateAuthState}) => (
  
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen 
            name="Profile">
            {screenProps => (
            <Profile {...screenProps} />
          )}
    </Stack.Screen>
    <Stack.Screen 
            name="EditProfile">
            {screenProps => (
            <EditProfile {...screenProps} />
          )}
    </Stack.Screen>
    <Stack.Screen 
            name="Messages">
            {screenProps => (
            <Messages {...screenProps} />
          )}
    </Stack.Screen>
    <Stack.Screen 
            name="Logout">
            {screenProps => (
            <Logout {...screenProps} updateAuthState={updateAuthState} />
          )}
    </Stack.Screen>
  </Stack.Navigator>
)

export default AccountNavigator