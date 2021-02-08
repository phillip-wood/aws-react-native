import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import Home from "../../screens/search/Home"
import Search from "../../screens/search/Search"
import SearchResults from "../../screens/search/SearchResults"
import SneakerFocus from "../../screens/search/SneakerFocus"

const Stack = createStackNavigator()

const SearchNavigator = (props) => (
  
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen 
            name="Home">
            {screenProps => (
            <Home {...screenProps} updateAuthState={props.updateAuthState} />
          )}
    </Stack.Screen>
    <Stack.Screen 
            name="Search">
            {screenProps => (
            <Search {...screenProps} updateAuthState={props.updateAuthState} />
          )}
    </Stack.Screen>
    <Stack.Screen 
            name="SearchResults">
            {screenProps => (
            <SearchResults {...screenProps} updateAuthState={props.updateAuthState} />
          )}
    </Stack.Screen>
    <Stack.Screen 
            name="SneakerFocus">
            {screenProps => (
            <SneakerFocus {...screenProps} updateAuthState={props.updateAuthState} />
          )}
    </Stack.Screen>
  </Stack.Navigator>
)

export default SearchNavigator 